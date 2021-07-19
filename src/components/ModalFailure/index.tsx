import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps
} from 'react-native'

import { styles } from './styles';

interface Props extends ModalProps {
    children: ReactNode,
    closeModal?: () => void,
}

export function ModalFailure({ children, closeModal, ...rest }: Props) {

    return (
        <Modal
            statusBarTranslucent
            transparent
            animationType="slide"
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {children}
                </View>
            </View>

        </Modal>
    );
}