import React from "react";
import {
    FlatList,
    SafeAreaView,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { procedures } from '../../procedures.json';
import lampiaoImg from '../assets/lampiao.png'

import { ButtonItem } from "../../components/ButtonItem";

import { styles } from './styles';

interface ProceduresProps {
    procedureID: number,
    title: string,
    image: string,
    steps: {
        id: string,
        type: string,
        description: string,
        question: string,
        work: {
            label: string,
            jump: string
        },
        failure: {
            label: string,
            jump: string
        }
    }[],

    actions: {
        id: string
        type: string
        description: string
    }[],
}

interface Procedures {
    procedure: ProceduresProps[]
}

export function Home() {
    const navigation = useNavigation();

    function goScreemDetails() {
        navigation.navigate('Lampiao');
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={{ flexDirection: 'row' }}>
                <ButtonItem title='Lampião' procedureID={0} onPress={goScreemDetails} />
                <ButtonItem title='Poste' procedureID={1} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ButtonItem title="Iluminação Interna " procedureID={2} />
                <ButtonItem title='Materiais e funcionamento' procedureID={3} />
            </View> */}
            <View >
                <FlatList
                    data={procedures}
                    renderItem={({ item }) => (
                        <ButtonItem
                            title={item.title}
                            onPress={goScreemDetails}
                            procedureID={item.procedureID}
                        />
                    )}
                    keyExtractor={item => String(item.procedureID)}
                    numColumns={2}
                    contentContainerStyle={styles.containerList}
                />
            </View>


        </SafeAreaView>
    );
}