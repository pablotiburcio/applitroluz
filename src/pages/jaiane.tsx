import React from "react";
import {Text,
        View,
        StyleSheet,
        Image, 
        SafeAreaView,
        TouchableOpacity 
        
    } from "react-native";
import { color } from "react-native-reanimated";

import passo7 from "../../assets/images/lampiao/LampiaoPasso7.png";

import {MaterialIcons} from '@expo/vector-icons';
import { State } from "react-native-gesture-handler";
import { useState } from "react";

export function Jaiane(){
    
    return(
        <SafeAreaView style = {styles.container}>
            <View style={{alignItems: 'center', margin: 5}}>
                <View style={styles.numberCircle}>
                    <Text style={styles.numberTitle}>7</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText }> Plugar a placa e colocar no sol</Text>
                </View>
            </View>

            
            <Image style={styles.image} source={passo7} />


            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50, flexDirection: 'row'}}>
                <TouchableOpacity style = {styles.button} activeOpacity={0.7}>
                    <Text style = {styles.textButton}>
                        <MaterialIcons name="lightbulb" size={24} color="black" />
                    </Text>
                    <Text style = {styles.textButton}>Não Apagou</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} activeOpacity={0.7}>
                    <Text style={styles.textButton}>
                        <MaterialIcons name="lightbulb-outline" size={24} color="black" />
                    </Text>
                    <Text style = {styles.textButton}>Apagou</Text>
                </TouchableOpacity>
            </View>


            {/* <View style = {{alignItems: 'center'}}>
                    <Text style = {styles.working}>Está Funcionando</Text>
                </View> 
            */}

            
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60
        
    },
    numberCircle:{
        borderRadius: 50,
        padding: 8,
        width: 50,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#4682B4'
        
    },
    numberTitle:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    title:{
        justifyContent: 'center',
        alignItems:'center',
        margin: 4
    },
    titleText:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1C1C1C'
    },
    image:{
        resizeMode: 'contain',
        width: '100%',
        height: '35%',
        marginTop: 10
    },
    textContent:{
        textAlign: 'center',
        fontSize: 26,
        color: '#696969'
    },
    button:{
        backgroundColor: '#B0C4DE',
        height: 70,
        width: 150,
        justifyContent: 'center',
        borderRadius: 40,
        margin: 20,
        alignItems:'center'
        
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#191970',paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    working: {
        fontSize: 26,
        color: 'white',
        backgroundColor: '#191970',
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical:15,
        marginTop: 40        
    }
    
})

