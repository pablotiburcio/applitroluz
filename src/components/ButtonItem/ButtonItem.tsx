import React, { useState } from "react";
import { StyleSheet, Text, Image, ImageSourcePropType, } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import * as FileSystem from 'expo-file-system';

type Props = RectButtonProps & {
    title: string,
    procedureID: number,
    image?: string,
    margin?: number | string
    font: number
}

export function ButtonItem({ title, procedureID, image, margin, font, ...rest }: Props) {
    const images = [
        require('../../pages/assets/lampiao.png'),
        require(`../../pages/assets/iluminacaoInterna.png`),
        require(`../../pages/assets/materiais.png`),
        require(`../../pages/assets/poste.png`),
    ];

    return (
        <RectButton style={[styles.container, { margin: margin }]} {...rest}>
            <Image
                source={images[procedureID]}
                style={styles.image}
            />
            <Text style={[styles.textButton, { fontSize: font }]}>{title}</Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#83C2FF',
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 4,

        borderRadius: 15,


    },
    textButton: {
        color: 'white',
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',

    },
    image: {
        height: "50%",
        width: "50%"
    },
});