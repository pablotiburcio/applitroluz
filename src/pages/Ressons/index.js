import React, { useState } from "react";
import { styles } from './styles';

import {CheckBox, Text, View,TextInput, TouchableOpacity } from "react-native";
 

const Ressons = () => {
  const [text, onChangeText] = React.useState(null);
  const [isNotKnew, setNotKnew] = useState(false);
  const [isNotHaveMaterial, setNotHaveMaterial] = useState(false);
  const [isNotHaveToll, setsNotHaveToll] = useState(false);

  return (
    <View style={styles.container}>
    

    {/* -------------------------------- Texto ------------------------------------- */} 
    <View style={{margin:20,}} >

    <Text style={{color :"#505050",margin: 8, fontSize:20, textAlign:"center"}}>

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
        <Text style={styles.label}>Não soube.</Text>
      </View>

      
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isNotHaveMaterial}
          onValueChange={setNotHaveMaterial}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
          
        />
        <Text style={styles.label}>Não Tenho matérial</Text>
      </View>



      <View style={styles.checkboxContainer}>
        <CheckBox

          value={isNotHaveToll}
          onValueChange={setsNotHaveToll}
          style={styles.checkbox}
          tintColors={{ true: '#5EBF2D', }}
        />
        <Text style={styles.label}>Não  tenho ferramenta.</Text>
      </View>
  

  {/*--------------------------------- AbA de  texto e botão de prosseguir  --------------------------------  */} 

      <View> 
      <Text style={{paddingLeft:50, fontSize:15, color:"#505050"}}> Outros: </Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        multiline
        placeholder="Digite aqui outro motivo"
        value={text}/>
      </View>



      <View >
      <TouchableOpacity style={styles.button}>
        <Text>Procesguir</Text>
      </TouchableOpacity>
      </View>


  
      </View>
  );
};



export default Ressons;