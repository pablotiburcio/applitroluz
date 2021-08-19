import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { ButtonFullWidth } from "../../components/ButtonFullWidth";
import { ButtonItem } from "../../components/ButtonItem/ButtonItem";

import { useProcedure } from "../../Contexts/context";

import { styles } from "./styles";

export function ScreenFinished() {
    const { procedureCurrent } = useProcedure();

    const navigation = useNavigation();

    function goHome() {
        navigation.navigate("Home");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerItem}>
                <View style={styles.boxItem}>
                    <ButtonItem
                        title={procedureCurrent.title}
                        procedureID={procedureCurrent.procedureID}
                        font={24}
                    />
                </View>
            </View>
            <Text style={styles.title}>Está Funcionando!!!</Text>
            <Text style={styles.subtitle}>{procedureCurrent.finished}</Text>
            <View style={styles.buttonView}>
                <ButtonFullWidth
                    onPress={goHome}
                    text='Voltar para o início'
                    backgroundColor='#2689E8'
                />
            </View>

        </SafeAreaView>
        // A ideia é tranformar esse modelo de página em um componente
    )
}