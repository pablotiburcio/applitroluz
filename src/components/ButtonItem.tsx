import React, { useState } from "react";
import { StyleSheet, Text, Image, ImageSourcePropType, } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import * as FileSystem from 'expo-file-system';

type Props = RectButtonProps & {
    title: string,
    procedureID: number,
    image?: string,
}

const i = '../pages/assets/lampiao.png';

export function ButtonItem({ title, procedureID, image, ...rest }: Props) {
    const images = [
        require('../pages/assets/lampiao.png'),
        require(`../pages/assets/iluminacaoInterna.png`),
        require(`../pages/assets/materiais.png`),
        require(`../pages/assets/poste.png`),
    ];

    return (
        <RectButton style={styles.container} {...rest}>

            <Image source={images[procedureID]} style={styles.image} />
            <Text style={styles.textButton}>{title}</Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
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
    textButton: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',

    },
    image: {
        height: 46,
        width: 46
    },
});