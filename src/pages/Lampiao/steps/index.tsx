import React from "react";
import {SafeAreaView, View, Text,} from 'react-native';
import { YesNoButton } from "../../../components/yesNoButtons";
import { styles } from "./styles";

export function Step0(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center',width: '100%'}}>
                <View style={styles.stepNumber}>
                    <Text
                        style={styles.textStepNumber}
                    >0</Text>
                </View>
                <Text style={styles.title}>
                    Ligar o botão
                </Text>
            </View>
            <View style={{alignItems: 'center',width: '100%'}}>
                <View style={styles.boxQuestion}>
                        <Text style={styles.textBoxQuestion}>Acendeu ?</Text>
                    </View>
                <View>
                    <YesNoButton />
                </View>
            </View>
        </SafeAreaView>
    // A ideia é tranformar esse modelo de página em um componente
    )
}