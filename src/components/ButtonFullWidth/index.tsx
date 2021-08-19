import React, { ReactNode } from 'react';
import {
    Text,
    View,
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
interface Props extends RectButtonProps {
    backgroundColor: string,
    text: string,
}
export function ButtonFullWidth({ backgroundColor, text, ...rest }: Props) {

    return (
        <RectButton
            {...rest}
            style={[styles.container, { backgroundColor: backgroundColor }]}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </RectButton>
    );
}