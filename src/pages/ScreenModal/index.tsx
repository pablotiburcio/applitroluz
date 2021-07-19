import React, { ReactNode } from 'react';
import {
    View,
} from 'react-native'
import { CardAction } from '../../components/CardAction';
import { ModalFailure } from '../../components/ModalFailure';

import { styles } from './styles';

export function ScreenModal() {

    return (
        <ModalFailure>
            <CardAction />
        </ModalFailure>
    );
}