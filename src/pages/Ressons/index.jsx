import React, { useState } from "react";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { CheckBox, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";


const Ressons = () => {
  const [text, onChangeText] = React.useState(null); //dados do input
  const [isNotKnew, setNotKnew] = useState(false);  //checkBox do não sabe
  const [isNotHaveMaterial, setNotHaveMaterial] = useState(false);//checkBox de não ter material
  const [isNotHaveToll, setsNotHaveToll] = useState(false);//checkBox de não ter farrementas

  const navigation = useNavigation();

  const IsPassValue=()=>{

    if(isNotKnew === true ){
      navigation.navigate('Form', {
        isNotKnew:"Não soube",
        isothers:text})
    }else if(isNotKnew === true && isNotHaveMaterial === true && isNotHaveToll === false){
      navigation.navigate('Form', {
        isNotKnew:"Não soube", 
        isNotHaveMaterial: "Não tenho matérial",
        isothers:text})
    }else if(isNotKnew === true && isNotHaveMaterial === true && isNotHaveToll === true){
      navigation.navigate('Form', {
        isNotKnew:"Não soube", 
        isNotHaveMaterial: "Não tenho matérial", 
        isNotHaveToll: "Não tenho ferramentas",
        isothers:text})
    }else if(isNotKnew === false && isNotHaveMaterial === true && isNotHaveToll === false){
      navigation.navigate('Form', {
        isNotHaveMaterial: "Não tenho matérial",
        isothers:text})
    }else if(isNotKnew === false && isNotHaveMaterial === true && isNotHaveToll === true){
      navigation.navigate('Form', {
        isNotHaveMaterial: "Não tenho matérial",
        isNotHaveToll: "Não tenho ferramentas",
        isothers:text})
    }else if(isNotKnew === false && isNotHaveMaterial === false && isNotHaveToll === true){
      navigation.navigate('Form', {
        isNotHaveToll: "Não tenho ferramentas",
        isothers:text})
    }else if(isNotKnew === true && isNotHaveMaterial === false && isNotHaveToll === true){
      navigation.navigate('Form', {
        isNotKnew:"Não soube", 
        isNotHaveToll: "Não tenho ferramentas",
        isothers:text})
    }else if(isNotKnew === false && isNotHaveMaterial === false && isNotHaveToll === false){
      if(text != null){
        navigation.navigate('Form', {isothers:text})
      }else{
        alert("Por Favor Informe qual o problema.")
      }
    }  
  }


  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>


          {/* -------------------------------- Texto ------------------------------------- */}
          <View style={{ margin: 20, }} >

            <Text style={{ color: "#505050", margin: 8, fontSize: 20, textAlign: "center" }}>

              Informe os motivos de não ter conseguido fazer a manutenção dos componentes

            </Text>

          </View>



          {/*--------------------------------- CheckBox  --------------------------------  */}
          <View style={styles.checkboxContainer}>

            <CheckBox
              value={isNotKnew}
              onValueChange={setNotKnew}
              style={styles.checkbox}
              tintColors={{ true: '#5EBF2D', }}
            />
            <Text style={styles.labelNS}>Não soube.</Text>
          </View>


          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isNotHaveMaterial}
              onValueChange={setNotHaveMaterial}
              style={styles.checkbox}
              tintColors={{ true: '#5EBF2D', }}

            />
            <Text style={styles.labelNTM}>Não Tenho matérial</Text>
          </View>



          <View style={styles.checkboxContainer}>
            <CheckBox

              value={isNotHaveToll}
              onValueChange={setsNotHaveToll}
              style={styles.checkbox}
              tintColors={{ true: '#5EBF2D', }}
            />
            <Text style={styles.labelNTF}>Não  tenho ferramenta.</Text>
          </View>


          {/*--------------------------------- AbA de  texto e botão de prosseguir  --------------------------------  */}

          <View>
            <Text style={{ paddingLeft: 20, fontSize: 15, color: "#505050" }}> Outros: </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              multiline
              placeholder="Digite aqui outro motivo"
              value={text} />
          </View>



          <View >
            <TouchableOpacity style={styles.button}
            onPress={IsPassValue}>
              <Text style={{color:"#fff"}}>Procesguir</Text>
            </TouchableOpacity>
          </View>



          </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};
export {
  Ressons
};