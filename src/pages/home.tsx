import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ButtonItem } from "../components/ButtonItem";
import lampiaoImg from '../pages/assets/lampiao.png';
import posteImg from '../pages/assets/poste.png';
import iluminacaoInternaImg from '../pages/assets/iluminacaoInterna.png';
import materiaisImg from '../pages/assets/materiais.png';


export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <ButtonItem title='Lampião' image={lampiaoImg} />
                <ButtonItem title='Poste' image={posteImg} />
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
                <ButtonItem title="Iluminação Interna " image={iluminacaoInternaImg} />
                <ButtonItem title='Materiais e funcionamento' image={materiaisImg} />
            </View>
            <View style={{flex: 2}}>

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