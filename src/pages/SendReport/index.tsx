import React, { useEffect, useState } from "react";
import { styles } from './styles';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Picker } from '@react-native-picker/picker';

import cred from '../../credentials.json';
import { createIconSetFromFontello } from "@expo/vector-icons";
import { useGuide } from "../../contexts/guide";

export function SendReport() {
  const [isWorked, setIsWorked] = useState("Não");
  const [code, setCode] = useState("");
  const [reasonsMessage, setReasonsMessage] = useState("");
  const [reasons, setReasons] = useState([] as string[]);

  const { currentGuide } = useGuide();

  useEffect(() => {

    const routeParams = [
      "Não soube",
      "Não tenho material",
      "Não tenho ferramenta",
      "Outros"
    ];
    let message = ""
    const reasonsArray = routeParams.map((item) => {
      message = message + item + "\n";
      return item
    })

    setReasonsMessage(message)
    setReasons(reasonsArray);

  }, [])

  function sendToWhatsapp() {
    const message =
      "Olá, estou entrando em contato pois tive problemas na manutenção de uma dassoluções da litro." +
      "\n*Solução com defeito:* \n" + currentGuide.title +
      "\n\n*Problemas citados:* \n" + reasonsMessage + "\nCodigo da solução: " + code;

    Linking.openURL(`https://wa.me/${cred.number}?text=${message}`);
  }

  async function postData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "post",
      headers: myHeaders,
      body: JSON.stringify([
        [code, isWorked, "Troca do painel", reasonsMessage]])
    };

    await fetch(`https://v1.nocodeapi.com/lucasdev/google_sheets/${cred.pageID}?tabId=${cred.pageName}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    sendToWhatsapp();
  }


  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Confirme as informações que serão enviadas para o Litro de Luz</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.labelForm}>Motivos do contato:</Text>
            <View>
              {reasons.map(item => {
                return <Text style={styles.reason}>{item} </Text>
              })}
            </View>

            <View style={styles.wrapperView}>
              <View style={{ maxWidth: '50%', marginRight: 20 }}>
                <Text style={styles.labelForm}>Código da Solução: </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setCode}
                  placeholder="Código"
                  value={code}
                />
              </View>
              <View style={{ maxWidth: '50%' }}>
                <Text style={styles.labelForm}>Está funcionando?</Text>
                <View style={styles.pickerBox}>
                  <Picker
                    selectedValue={isWorked}

                    onValueChange={(itemLabel, itemIndex) => setIsWorked(itemLabel)}
                  >
                    <Picker.Item label="Sim" value="Sim" />
                    <Picker.Item label="Não" value="Não" />
                  </Picker>
                </View>
              </View>
            </View>

            <View style={styles.ViewPickerContainer}>




            </View>

            <View style={styles.MaintenanceDoneContainer}>

              <Text>Manutenção Feita:</Text>
              <View style={styles.MaintenanceDone}>
                <Text style={{ padding: 10 }}>Trocas do painel, troca da bateria</Text>
              </View>

              <Text>Problemas:</Text>
              <View style={styles.MaintenanceDone}>
                <Text style={{ padding: 10 }}>Trocas do painel, troca da bateria</Text>
              </View>

            </View>
          </View>




          <TouchableOpacity
            style={styles.button}
            onPress={postData}>
            <Text style={{ color: "#fff", textAlign: "center", margin: 5, fontSize: 16 }} >Entrar em contato com o voluntário pelo Whatsapp</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView >


  );
};