import React from 'react';
import {Text,
        View,
        StyleSheet,
        Image, 
        SafeAreaView,
        TouchableOpacity 
        
    } from "react-native";

import passo7 from "../../assets/images/lampiao/LampiaoPasso7.png";
import {MaterialIcons} from '@expo/vector-icons';
import { useState } from "react";


export function Jaiane(){
    const [visible, setVisible] = useState(false);

    function funcionando(){
        setVisible(true);
    }

 
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
                <TouchableOpacity style = {styles.button} activeOpacity={0.7} >
                    <Text style = {styles.textButton}>Não Apagou</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} activeOpacity={0.7} onPress={funcionando} >
                    <Text style = {styles.textButton}>Apagou</Text>
                </TouchableOpacity>
            </View>
        
            {visible && 
                <View>
                    <View style={styles.working}>
                        <Text style={styles.textContent}>O lampião está funcionando</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text style={styles.textButtonBack}>Voltar ao Início</Text>
                    </TouchableOpacity>
                </View>
                
                }
            
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
        backgroundColor: '#191970'
        
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
        color: 'white',
        paddingVertical: 20,
    },
    button:{
        height: 50,
        width: 150,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#191970',
        borderWidth: 2,
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
        backgroundColor: '#191970',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
                
    },
    buttonBack:{
        alignItems: 'center',
        marginVertical: 20
    },
    textButtonBack:{
        color: '#191970',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: '#191970',
        borderBottomWidth: 2
    }
    
})

