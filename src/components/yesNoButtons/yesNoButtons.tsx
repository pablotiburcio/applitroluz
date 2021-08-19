import React from "react";
import { StyleSheet, Text, Image, ImageSourcePropType, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from './styles';

interface PropsYesNoButton extends RectButtonProps {
    yes: () => void;
    no: () => void;
}

export function YesNoButton({ yes, no, ...rest }: PropsYesNoButton) {
    return (
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <RectButton style={styles.button1} {...rest}  >
                <Text style={styles.textButton}>Voltar</Text>
            </RectButton>
            <RectButton style={styles.button2} {...rest} onPress={yes}>
                <Text style={styles.textButton}>Sim</Text>
            </RectButton>
            <RectButton style={styles.button3} {...rest} onPress={no}>
                <Text style={styles.textButton}>Não</Text>
            </RectButton>
        </View>

    )
}