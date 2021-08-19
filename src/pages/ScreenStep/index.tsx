import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useProcedure } from "../../Contexts/context";

import { YesNoButton } from "../../components/yesNoButtons/yesNoButtons";

import { styles } from "./styles";
import { ModalFailure } from "../../components/ModalFailure";
import { CardAction } from "../../components/CardAction";

export function ScreenStep() {
    const { stepCurent, procedureCurrent, setStep, setAction, showAction } = useProcedure();
    const [openModal, setOpenModal] = useState(true);
    const navigation = useNavigation()

    function goWorked() {

        if (stepCurent.work.jump.indexOf("T") != -1) {
            const nextStep = stepCurent.work.jump.slice(1);
            setStep(procedureCurrent.steps[Number(nextStep)])

        } else if (stepCurent.work.jump.indexOf("A") != -1) {
            const nextAction = stepCurent.work.jump.slice(1);
            setAction(procedureCurrent.actions[Number(nextAction)]);
        } else {
            navigation.navigate("ScreenFinished");
        }
    }

    function goFailure() {

        if (stepCurent.failure.jump.indexOf("T") != -1) {
            const nextStep = stepCurent.failure.jump.slice(1);
            setStep(procedureCurrent.steps[Number(nextStep)])

        } else if (stepCurent.failure.jump.indexOf("A") != -1) {
            const nextAction = stepCurent.failure.jump.slice(1);
            setAction(procedureCurrent.actions[Number(nextAction)]);
        } else {
            navigation.navigate("ScreenFinished");
        }
    }

    const numberStep = stepCurent.id.slice(1);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <View style={styles.stepNumber}>
                        <Text style={styles.textStepNumber}>
                            {numberStep}
                        </Text>
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
                        <YesNoButton
                            yes={goWorked}
                            no={goFailure}
                        />
                    </View>
                </View>
            </SafeAreaView>
            <ModalFailure
                visible={showAction}
            >
                <CardAction />
            </ModalFailure>

        </>

    )
}