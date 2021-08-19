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

import { ButtonStep } from "../../components/ButtonStep/ButtonStep";
import { Procedure, Step } from '../../utils/interfaces';

import { styles } from "./styles";

import { Item } from "../../components/Item/Item";
import { useNavigation } from "@react-navigation/native";
import { useProcedure } from "../../Contexts/context";

export function ScreenList() {
    const { procedureCurrent, setStep } = useProcedure();
    const [listSteps, setSteps] = useState<Step[]>(procedureCurrent.steps as Step[]);

    const navigation = useNavigation();

    function goStep() {
        setStep(procedureCurrent.steps[0]);
        navigation.navigate("ScreenStep");
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, }}>
                    <Text style={styles.title}>Etapas</Text>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Ionicons name="play" size={24} color="#5EBF2D" onPress={goStep} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={listSteps}
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

