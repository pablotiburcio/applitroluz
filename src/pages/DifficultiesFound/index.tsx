import React, { useEffect, useState } from "react";
import { styles } from './styles';

import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from "../../components/PrimaryButton";

import CheckboxList from 'rn-checkbox-list';
import { useReasons } from "../../contexts/reasons";

export interface checkboxItem {
  id: number,
  name: string,
}

export function DifficultiesFound() {
  const { addReasons } = useReasons();

  const [checkboxValue, setCheckboxValue] = useState([] as checkboxItem[]);
  const [inputValue, setInputValue] = useState('');

  const checkboxData = [
    { id: 1, name: 'Não soube' },
    { id: 2, name: 'Não tenho material' },
    { id: 3, name: 'Não tenho ferramentas' },
  ];

  const navigation = useNavigation();

  function onSubmitForm() {
    if (checkboxValue.length > 0 || inputValue.length > 0) {
      addReasons(checkboxValue);
      navigation.navigate('SendReport');
    }

    else {
      alert('Por favor, selecione ou digite quais foram suas dificuldades!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Por qual motivo você não conseguiu realizar a manutenção?
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckboxList
          listItems={checkboxData}
          listItemStyle={styles.checkboxItem}
          selectedListItems={checkboxValue}
          theme="green"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelInput}>
          Outros:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          multiline
          textAlignVertical='top'
          placeholder='Insira aqui outro motivo'
        />
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          title='Prosseguir'
          color='#2688E8'
          onPress={onSubmitForm}
        />
      </View>

    </View>
  );
}

export default DifficultiesFound;