import React, { useState } from "react";
import { styles } from './styles';
import {Picker, View, Text, TouchableOpacity, TextInput,Linking,SafeAreaView,ScrollView} from "react-native";


const Form  = ({route}) => {
  const [selectedValue, setSelectedValue] = useState("Sim");
  const [text, onChangeText] = React.useState(""); //dados do input

  const Whatsapp =() =>{
    Linking.openURL(`https://wa.me/+558299145197?text=${ 
      
              "*Problemas citados:*", "\n",
              route.params?.isNotKnew, "\n",
              route.params?.isNotHaveMaterial, "\n",
              route.params?.isNotHaveToll,  "\n",
              route.params?.isothers,  "\n",
              "Codigo da solução: ", text}`);
  }
  
  
  return (
    <SafeAreaView  >
      <ScrollView >
      <View style={styles.container}>
        {/*------------------------ Texto Header-----------------------------*/}
        <View style={{alignItems:"center"}}>
        <Text style={{fontWeight:"bold",fontSize:20, textAlign:"center",width:311}}>Entre em contato com um dos voluntários da Litro</Text>
        <Text style={{color :"#505050",margin: 4, fontSize:16, textAlign:"center", width:311}}>Preencha as informações abaixo
    em seguida te direcionaremos para um dos voluntários.</Text>
        
        </View>
    
          {/*------------------------ Motivo do contato-----------------------------*/}
          <View >
          <Text style={{fontWeight:"bold"}}>Motivo do contato:</Text>
          <View style={styles.RessonsContainer}>
          <Text style={{padding:5}}>{route.params?.isNotKnew}</Text>
          <Text style={{padding:5}}>{route.params?.isNotHaveMaterial}</Text>
          <Text style={{padding:5}}>{route.params?.isNotHaveToll}</Text>
          <Text style={{padding:5}}>{route.params?.isothers}</Text>
          
          </View>
          </View>
    
          {/*------------------------ Texto dos Selects-----------------------------*/}
          <View style={styles.TextViewPickerContainer}>
          <Text style={styles.TextViewPicker}>Código da Solução: </Text>
          <Text style={styles.TextViewPicker}>Está funcinando ? </Text>
          </View>
    
    
    
          {/*------------------------ Selects-----------------------------*/}
          <View style={styles.ViewPickerContainer}>
    
            <TextInput
              style={styles.ViewPicker}
              onChangeText={onChangeText}
              multiline
              placeholder="code"
              value={text} />
    
                  <Picker
              style={styles.ViewPicker}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
          
          </Picker>
    
        </View> 
        {/*------------------------ Manutenção feita-----------------------------*/}
          <View style={styles.MaintenanceDoneContainer}>
    
              <Text>Manutenção Feita:</Text>
                <View  style={styles.MaintenanceDone}>
                <Text style={{padding:10}}>Trocas do painel, troca da bateria</Text>
              </View>
    
              <Text>Problemas:</Text>
                <View  style={styles.MaintenanceDone}>
                <Text style={{padding:10}}>Trocas do painel, troca da bateria</Text>
              </View>
    
          </View>
    
          <View >
          <TouchableOpacity
            style={styles.button}
            onPress={Whatsapp}>
            <Text  style={{ color:"#fff" ,textAlign:"center", margin:5, fontSize:16}} >Entrar em contato com o voluntário pelo Whatsapp</Text>
          </TouchableOpacity>
    
          </View>
        </View>
      </ScrollView>
  </SafeAreaView>

    
  );
};



export {
  Form
};