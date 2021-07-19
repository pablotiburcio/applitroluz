import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: '10%'
    },
    stepNumber: {
        backgroundColor: '#0371DB',
        borderRadius: 30,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 8
    },
    textStepNumber: {
        fontFamily: 'Nunito_700Bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    title:{
        fontFamily: "Nunito_700Bold",
        fontSize: 18,
        color: "#57606F",
        
    },
    boxQuestion:{
        width: '56%',
        height: 50,
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 0.3,
    },
    textBoxQuestion:{
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
        color: "#57606F"
    },
    
}) 