import React from "react";
import { StyleSheet, Text, Image, ImageSourcePropType, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";


export function YesNoButton(){
    return(
        <View style={{flexDirection:'row', width: '100%'}}>
            <RectButton style={styles.button1}>
                <Text style={styles.textButton}>Voltar</Text>
            </RectButton>
            <RectButton style={styles.button2}>
                <Text style={styles.textButton}>Sim</Text>
            </RectButton>
            <RectButton style={styles.button3}>
                <Text style={styles.textButton}>Não</Text>
            </RectButton>
        </View>
        
    )
}

const styles = StyleSheet.create({
    button1:{
        width: '25%',
        height: 40,
        backgroundColor: "#AFAFAF",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        margin:5
    },
    button2:{
        width: '25%',
        height: 40,
        backgroundColor: "#0371DB",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        margin:5
    },
    button3:{
        width: '25%',
        height: 40,
        backgroundColor: "#FF3C3C",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        margin:5
    },
    textButton:{
        fontFamily: "Nunito_700Bold",
        fontSize: 16,
        color: 'white'
    }
})