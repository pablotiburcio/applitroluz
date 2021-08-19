import React from "react";
import {
    FlatList,
    SafeAreaView,
    View,
    Image
} from "react-native";

import { procedures } from '../../procedures.json';

import lampiaoImg from '../assets/lampiao.png'

import { ButtonItem } from "../../components/ButtonItem/ButtonItem";

import { styles } from './styles';

import { Procedure } from "../../utils/interfaces";
import { useProcedure } from "../../Contexts/context";
import { useNavigation } from "@react-navigation/native";



export function Home() {
    const { setProc } = useProcedure();



    const navigation = useNavigation();
    function goScreemDetails(procedureID: number) {
        setProc(procedures[procedureID]);
        navigation.navigate("ScreenList");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <FlatList
                    data={procedures}
                    renderItem={({ item }) => (
                        <ButtonItem
                            title={item.title}
                            onPress={() => goScreemDetails(item.procedureID)}
                            procedureID={item.procedureID}
                            margin={25}
                            font={16}
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