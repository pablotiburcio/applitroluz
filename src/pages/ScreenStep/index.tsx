import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';

import { useProcedure } from "../../Contexts/context";

import { YesNoButton } from "../../components/yesNoButtons";

import { styles } from "./styles";

export function ScreenStep() {
    const { stepCurent } = useProcedure();

    const numberStep = stepCurent.id.slice(1);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={styles.stepNumber}>
                    <Text
                        style={styles.textStepNumber}
                    >{numberStep}</Text>
                </View>
                <Text style={styles.title}>
                    {stepCurent.description}
                </Text>
            </View>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={styles.boxQuestion}>
                    <Text style={styles.textBoxQuestion}>{stepCurent.question} </Text>
                </View>
                <View>
                    <YesNoButton />
                </View>
            </View>
        </SafeAreaView>
        // A ideia é tranformar esse modelo de página em um componente
    )
}