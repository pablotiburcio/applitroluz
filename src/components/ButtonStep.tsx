import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Entypo } from '@expo/vector-icons';

type Props = RectButtonProps & {
    title: string;
    stepNumber: string;
}

export function ButtonStep({ title, stepNumber, ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest}>

            <View style={styles.stepNumber}>
                <Text
                    style={styles.textStepNumber}
                >{stepNumber}</Text>
            </View>
            <Text
                style={styles.textButton}
                numberOfLines={1}
            >
                {title}
            </Text>

            <Entypo name="chevron-right" size={24} color="#83C2FF" />

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFDFD',
        width: '100%',
        height: 60,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 2,

    },
    textButton: {
        flex: 1,
        maxWidth: '70%',
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        marginLeft: 10,

    },
    stepNumber: {
        backgroundColor: '#83C2FF',
        borderRadius: 30,
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStepNumber: {
        fontFamily: 'Nunito_700Bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
})