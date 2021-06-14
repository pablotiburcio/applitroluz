import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

interface PropsItem {
  name: string
}

const DATA = [
  {
    name: 'Lucas',
  }
]

function Item ({ name }: PropsItem) {
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

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={styles.content}
        data={DATA}
        renderItem={({item}) => {return <Item name={item.name}/>}}
        keyExtractor={(index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      
      justifyContent: 'center',
    },
    content:{
      flex: 1,
      width: '100%',
    },

    item: {
      padding: 6,
      backgroundColor: "#f5f5f5"
    },
    name: {
      fontSize: 24,  
    }
  });
  