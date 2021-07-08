import React from "react";
import { StyleSheet, Text, Image, ImageSourcePropType, } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";



type Props = RectButtonProps & {
    title: string,
    image: ImageSourcePropType;
}

export function ButtonItem({title, image, ...rest}: Props){
    return(
        <RectButton style={styles.container} {...rest}>
            
            <Image source= {image} style={styles.image}/>
            <Text style={styles.textButton}>{title}</Text>
        </RectButton>
    );
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
        elevation: 4,
        margin: 25,
        height: 100,
        width: '30%'
        
    },
    textButton:{
        fontSize: 14,
        color: 'white',
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',
        
    },
    image:{
        height: 46,
        width: 46
    },
});