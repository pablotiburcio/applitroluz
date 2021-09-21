import React, { useState } from "react";
import { styles } from './styles';

import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import CheckboxList from 'rn-checkbox-list';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from "../../components/PrimaryButton";

const DifficultiesFound = () => {
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [inputValue, setInputValue] = useState<string>('');

  const checkboxData = [
    { id: 1, name: 'Não soube' },
    { id: 2, name: 'Não tenho material' },
    { id: 3, name: 'Não tenho ferramentas' },
  ];
  const navigation = useNavigation();

  function getCheckboxValue(data: {}[]) {
    return data.map(value => value.name);
  }

  function testDebug(data) {
    let result = data.items.map(value => value.name);
    setCheckboxValue(result);
    console.log('aaaaaaaaaaaaaa');
  }

  function onSubmitForm() {
    if (checkboxValue.length > 0 || inputValue.length > 0) {
      navigation.navigate('Form', {
        difficulties: [...checkboxValue, inputValue]
      });
    }

    else {
      alert('Por favor, selecione ou digite quais foram suas dificuldades!')
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>
        Informe o porquê não 
        foi possível realizar 
        a manutenção
      </Text>
      <CheckboxList 
        listItems={checkboxData} 
        onChange={testDebug}
      />
      <View>
        <Text style={{ paddingLeft: 20, fontSize: 15, color: "#505050" }}> Outros: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          multiline
          placeholder='Insira aqui outro motivo'
        />
      </View>
      <PrimaryButton 
        title='Prosseguir'
        color='red'
        onPress={onSubmitForm}
      />
    </View>
  );
}

export default DifficultiesFound;