import React from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";



type Props = RectButtonProps &{
    title: string,
    image: ImageSourcePropType;
}

export function ButtonItem({title, image, ...rest}: Props){
    return(
        <RectButton style={styles.container}>
            <Image source= {image} style={styles.image}/>
            <Text style={styles.textButton}>{title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#83C2FF',
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 10,
        margin: 25,
        padding: 10,
        
    },
    textButton:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center'
    },
    image:{
        height: '60%',
        width: '60%',
        marginBottom: 2
    }
})