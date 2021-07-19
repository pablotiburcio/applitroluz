import React from "react";
import {
    SafeAreaView,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


import lampiaoImg from '../../pages/assets/lampiao.png';
import posteImg from '../../pages/assets/poste.png';
import iluminacaoInternaImg from '../../pages/assets/iluminacaoInterna.png';
import materiaisImg from '../../pages/assets/materiais.png';

import { ButtonItem } from "../../components/ButtonItem";

import { styles } from './styles';

export function Home() {
    const navigation = useNavigation();

    function goLampiao() {
        navigation.navigate('Lampiao');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <ButtonItem title='Lampião' image={lampiaoImg} onPress={goLampiao} />
                <ButtonItem title='Poste' image={posteImg} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ButtonItem title="Iluminação Interna " image={iluminacaoInternaImg} />
                <ButtonItem title='Materiais e funcionamento' image={materiaisImg} />
            </View>

        </SafeAreaView>
    );
}