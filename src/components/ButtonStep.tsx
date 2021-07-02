import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";

type Props = RectButtonProps &{
    title: string;
    stepNumber: string;
}

export function ButtonStep({title, stepNumber, ...rest}: Props){
    return(
        <RectButton style={styles.container} {...rest}>
            <View style={styles.stepNumber}>
                <Text style={styles.textStepNumber}>{stepNumber}</Text>
            </View>
            <Text style={styles.textButton}>{title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FDFDFD',
        width: '100%',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 30,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
        flexDirection: 'row'
    },
    textButton:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        marginLeft: 10
    },
    stepNumber:{
        backgroundColor: '#134783',
        borderRadius: 30,
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent:'center'
    },
    textStepNumber:{
        fontFamily: 'Nunito_700Bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
})