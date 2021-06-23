import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Item} from '../components/Item';

const DATA = [
  {
    name: 'Lucas',
  },
  {
    name: 'Jaiane'
  },
  {
    name: 'Marcos'
  }
]


export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={styles.content}
        data={DATA}
        renderItem={({item}) => {return <Item name={item.name}/>}}
        keyExtractor={(item, index) => index.toString()}
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
  });
  