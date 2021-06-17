import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PropsItem {
  name: string
}

export function Item ({ name }: PropsItem) {
    const navigation = useNavigation();
    
    return(
      <TouchableOpacity style={styles.item}
        onPress={() => {navigation.navigate(name)}}
      >
        <Text style={styles.name}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  item: {
    padding: 6,
    backgroundColor: "#f5f5f5"
  },
  name: {
    fontSize: 24,  
  }
})