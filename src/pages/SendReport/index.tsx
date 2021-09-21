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
    <SafeAreaView  >
      <ScrollView >
        <View style={styles.container}>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", width: 311 }}>Entre em contato com um dos voluntários da Litro</Text>
            <Text style={{ color: "#505050", margin: 4, fontSize: 16, textAlign: "center", width: 311 }}>Preencha as informações abaixo
              em seguida te direcionaremos para um dos voluntários.</Text>

          </View>


          <View >
            <Text style={{ fontWeight: "bold" }}>Motivo do contato:</Text>
            <View style={styles.RessonsContainer}>
              <Text>{reasonsMessage}</Text>
            </View>
          </View>


          <View style={styles.TextViewPickerContainer}>
            <Text style={styles.TextViewPicker}>Código da Solução: </Text>
            <Text style={styles.TextViewPicker}>Está funcinando ? </Text>
          </View>

          <View style={styles.ViewPickerContainer}>
            <TextInput
              style={styles.ViewPicker}
              onChangeText={setCode}
              multiline
              placeholder="code"
              value={code}
            />

            <Picker
              style={styles.ViewPicker}
              selectedValue={isWorked}
              onValueChange={(itemLabel, itemIndex) => setIsWorked(itemLabel)}>
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>

          </View>
          {/*------------------------ Manutenção feita-----------------------------*/}
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

          <View >
            <TouchableOpacity
              style={styles.button}
              onPress={postData}>
              <Text style={{ color: "#fff", textAlign: "center", margin: 5, fontSize: 16 }} >Entrar em contato com o voluntário pelo Whatsapp</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>


  );
};