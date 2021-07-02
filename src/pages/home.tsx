import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ButtonItem } from "../components/ButtonItem";
import lampiaoImg from '../pages/assets/lampiao.png';
import posteImg from '../pages/assets/poste.png';
import iluminacaoInternaImg from '../pages/assets/iluminacaoInterna.png';
import materiaisImg from '../pages/assets/materiais.png';
import { useNavigation } from "@react-navigation/native";

export function Home(){
    const navigation = useNavigation();

    function goLampiao(){
        navigation.navigate('Lampiao');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <ButtonItem title='Lampião' image={lampiaoImg} onPress={goLampiao} />
                <ButtonItem title='Poste' image={posteImg} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <ButtonItem title="Iluminação Interna " image={iluminacaoInternaImg} />
                <ButtonItem title='Materiais e funcionamento' image={materiaisImg} />
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 25,
        
    }
})