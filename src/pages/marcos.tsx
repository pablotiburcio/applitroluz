import React from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import { IconButton, Button, BottomNavigation } from 'react-native-paper';

import step09 from '../../assets/images/lampiao/lantern_step09.png';

export function Marcos(props) {
    return(
        <SafeAreaView style={{flex:1}}>
            <Appbar callback={props.navigation}/>
            <Body/>
            <Navbar/>
        </SafeAreaView>
    );
}

const Appbar = ({ callback }) => {
    return(
        <View style={styles.appbar}>
            <StatusBar
                animated={true}
                backgroundColor="#0074C6" 
            />
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <IconButton 
                    icon="arrow-left"
                    color="white"
                    onPress={() => callback.navigate('Home')}
                />
                <Text style={styles.title}>Manutenção do Lampião</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.subtitle}>Passo: 9</Text>
            </View>
        </View>
    );
}

const Body = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.text}>Mensure a tenção no plug macho com a placa ao sol</Text>
            <Image style={styles.image} source={step09}/>
        </View>
    );
}

const Navbar = () => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.question}>Qual foi a tensão obtida?</Text>
            <View style={{flexDirection: "row"}}>
                <Button 
                    mode="outlined" 
                    color="#e74c3c" 
                    contentStyle={{height: 50}}
                    onPress={() => console.error("Trocar plug ou placa e recomeçar os procedimentos do início")}
                >
                    Menor que 14V
                </Button>
                <View style={{width:25}}/>
                <Button 
                    mode="contained" 
                    color="#1dd1a1" 
                    dark={true} 
                    contentStyle={{height: 50}}
                    onPress={() => console.error("Ir para etapa 10")}
                >
                    Maior que 14V
                </Button>
            </View>
        </View>
    );
}

export default Marcos;

const styles = StyleSheet.create({
    appbar: {
        height: 55,
        backgroundColor: "#00a8ff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
        elevation: 5,
    },
    body: {
        flex: 1,
        flexDirection: "column",
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    navbar: {
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 30
    },
    title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
    subtitle: {
        color: "#ffffff",
        fontSize: 14,
    },
    text: {
        color: "black",
        fontSize: 18,
        textAlign: "justify"
    },
    question: {
        fontSize: 18, 
        fontWeight: "bold", 
        textAlign:"center", 
        marginBottom: 40
    },
    image: {
        width: "100%",
        height: "30%",
        marginTop: 20,
        resizeMode: "contain"
    },
});