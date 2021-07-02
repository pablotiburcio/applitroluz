import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {Nunito_700Bold} from '@expo-google-fonts/nunito';
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonStep } from "../components/ButtonStep";

export function Lampiao(){
    return(
        <SafeAreaView style={styles.container}>
                
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10,}}>
                <Text style={styles.title}>Etapas</Text>
                <View style = {{flex: 2}}></View>
                <View style= {{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.buttonPlay}>
                        <Ionicons name="play" size={24} color="#5EBF2D" />
                    </TouchableOpacity>
                </View>   
            </View>
            <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
                <ButtonStep title='Etapa' stepNumber='0'/>
                <ButtonStep title='Etapa' stepNumber='1'/>
                <ButtonStep title='Etapa' stepNumber='2'/>
                <ButtonStep title='Etapa' stepNumber='3'/>
                <ButtonStep title='Etapa' stepNumber='4'/>
                <ButtonStep title='Etapa' stepNumber='5'/>
                <ButtonStep title='Etapa' stepNumber='6'/>
                <ButtonStep title='Etapa' stepNumber='7'/>
                <ButtonStep title='Etapa' stepNumber='8'/>
                <ButtonStep title='Etapa' stepNumber='9'/>
                <ButtonStep title='Etapa' stepNumber='10'/>
                <ButtonStep title='Etapa' stepNumber='11'/>
                <ButtonStep title='Etapa' stepNumber='12'/>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 24,
    },
    title:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        flex: 1
    },
    buttonPlay:{
        backgroundColor: 'white',
        height: 34,
        width: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
        
    }
})