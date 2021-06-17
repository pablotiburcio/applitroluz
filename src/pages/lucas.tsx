import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import  {getStatusBarHeight} from 'react-native-iphone-x-helper';

import Passo2 from '../../assets/images/lampiao/LapiaoPasso2.png';

export function Lucas() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circleStep}>
          <Text style={styles.numberStep}>2</Text>
        </View>
        <Text style={styles.text}>Checar continuidade do fusível</Text>  
      </View>
      
      <Image style={styles.image} source={Passo2}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 10
  },
  header: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 45,
    
  },
  circleStep: {
    margin: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f81bd',
    borderRadius: 40
  },
  numberStep:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: '80%',
    
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'center',
    // marginTop: -150,
  },

})