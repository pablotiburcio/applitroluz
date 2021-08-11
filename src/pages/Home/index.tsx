import React from "react";
import {
    FlatList,
    Image,
    ImageProps,
    SafeAreaView,
    View,
} from "react-native";
import * as FileSystem from 'expo-file-system';

import { procedures } from '../../procedures.json';

import lampiaoImg from '../assets/lampiao.png'

import { ButtonItem } from "../../components/ButtonItem";

import { styles } from './styles';

import { useProcedure } from "../../Contexts/context";
import { useNavigation } from "@react-navigation/native";
import { Procedure } from "../../utils/interfaces";

import RNFS from 'react-native-fs';

export function Home() {
    const { setProc } = useProcedure();

    // const imageURI = Asset.fromModule(require(`../assets/${procedures[0].image}.png`)).uri;

    // console.log(imageURI);
    let image;
    RNFS.readFile(`../assets/${procedures[0].image}.png`, 'base64')
        .then(res => {
            console.log(res);
            image = res;
        });

    var uri = FileSystem.documentDirectory + procedures[0].image;
    console.log(uri);

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
                            image={uri}
                            onPress={() => goScreemDetails(item.procedureID)}
                            procedureID={item.procedureID}
                        />
                    )}
                    keyExtractor={item => String(item.procedureID)}
                    numColumns={2}
                    contentContainerStyle={styles.containerList}
                />
                <Image
                    source={{ uri: image, width: 60, height: 60 }}
                    width={30}
                    height={30}
                />

            </View>
        </SafeAreaView>
    );
}