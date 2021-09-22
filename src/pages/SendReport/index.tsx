import React, { useEffect, useState } from "react";
import { styles } from './styles';
import {
  View,
  Text,
  TextInput,
  Linking,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
// import RNPickerSelect from 'react-native-picker-select';

import SelectDropdown from 'react-native-select-dropdown'

import cred from '../../credentials.json';
import { createIconSetFromFontello, FontAwesome } from "@expo/vector-icons";
import { useGuide } from "../../contexts/guide";
import { useReasons } from "../../contexts/reasons";
import { PrimaryButton } from "../../components/PrimaryButton";

export function SendReport() {
  const { reasons } = useReasons();

  const [isWorked, setIsWorked] = useState();

  const [code, setCode] = useState("");
  const [reasonsMessage, setReasonsMessage] = useState("Olá");

  const { currentGuide, done } = useGuide();

  useEffect(() => {
    let message = ""
    const reasonsArray = reasons.map((item) => {
      message = message + item.name + "\n";
      return item
    })

    setReasonsMessage(message)

  }, [])

  function sendToWhatsapp() {
    const message =
      "Olá, estou entrando em contato pois tive problemas na manutenção de uma dassoluções da litro." +
      "\n*Solução com defeito:* \n" + currentGuide.title +
      "\n\n*Problemas citados:* \n" + reasonsMessage + "\nCodigo da solução: " + code;

    Linking.openURL(`https://wa.me/${cred.number}?text=${message}`);
  }

  async function postData() {
    let stepsDone = ""
    done.map(({ description }) => {
      stepsDone = stepsDone + description + "\n";
    });

    var myHeaders = new Headers();


    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify([
        [code, isWorked, stepsDone, reasonsMessage]])
    };

    await fetch(`https://v1.nocodeapi.com/lucasdev/google_sheets/${cred.pageID}?tabId=${cred.pageName}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    sendToWhatsapp();
  }

  const countries = ["Sim", "Não"]


  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.safeView} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Confirme as informações que serão enviadas para o Litro de Luz</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.labelForm}>Motivos do contato:</Text>

            <FlatList
              data={reasons}
              renderItem={({ item }) => <Text style={styles.reason}>{item.name} </Text>}
              keyExtractor={item => String(item.id)}
            />

            <View style={styles.wrapperView}>
              <View style={{ width: '45%' }}>
                <Text style={styles.labelForm}>Código da Solução: </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setCode}
                  placeholder="Código"
                  value={code}
                />
              </View>
              <View style={{ width: '45%' }}>
                <Text style={styles.labelForm}>Está funcionando?</Text>

                <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => setIsWorked(selectedItem)}
                  defaultButtonText={"Selecione"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                  renderDropdownIcon={() => {
                    return (
                      <FontAwesome name="chevron-down" color={"#00539F"} size={16} />
                    );
                  }}
                  buttonTextStyle={styles.rowTextStyle}
                  buttonStyle={styles.pickerBox}
                  rowStyle={styles.rowStyle}
                  rowTextStyle={styles.rowTextStyle}
                />

              </View>
            </View>

            <View style={styles.MaintenanceDoneContainer}>

              <Text style={styles.labelForm}>Manutenção Feita:</Text>
              <View style={styles.labelForm}>
                <FlatList
                  data={done}
                  renderItem={({ item }) => <Text style={styles.reason}>{item.description} </Text>}
                  keyExtractor={item => item.id.toString()}
                />

              </View>
            </View>

          </View>
          <View style={styles.footer}>
            <PrimaryButton
              title='Entrar em contato com o voluntário pelo Whatsapp'
              color='#2688E8'
              onPress={postData}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView >
  );
};