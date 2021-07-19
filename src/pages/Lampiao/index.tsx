import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import { ButtonStep } from "../../components/ButtonStep";
import { Procedure, Step } from '../../utils/interfaces';

import { styles } from "./styles";
import { procedures } from '../../procedures.json';
import { Item } from "../../components/Item";


export function Lampiao() {
    const [listSteps, setSteps] = useState<Step[]>(steps as Step[]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, }}>
                    <Text style={styles.title}>Etapas</Text>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Ionicons name="play" size={24} color="#5EBF2D" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <ButtonStep title='Ligar o Botão' stepNumber='0' />
                <ButtonStep title='Checar conexões' stepNumber='1' />
                <ButtonStep title='Checar continuidade no fusível' stepNumber='2' />
                <ButtonStep title='Medir tensão da bateria' stepNumber='3' />
                <ButtonStep title='Testar continuidade do botão' stepNumber='4' />
                <ButtonStep title='Testar continuidade do fio vermelho...' stepNumber='5' />
                <ButtonStep title='Ligar bateria direto no LED' stepNumber='6' />
                <ButtonStep title='Plugar a placa e colocar no sol' stepNumber='7' />
                <ButtonStep title='Checar se as conexões estão...' stepNumber='8' />
                <ButtonStep title='Medir tensão no plug macho com...' stepNumber='9' />
                <ButtonStep title='Conectar o plug macho na fêmea...' stepNumber='10' />
            </ScrollView> */}
                <FlatList
                    data={steps}
                    renderItem={({ item, index }) => {
                        return (
                            <ButtonStep
                                title={item.description}
                                stepNumber={String(index)}
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

