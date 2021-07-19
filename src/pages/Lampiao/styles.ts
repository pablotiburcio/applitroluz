import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 24,
        paddingHorizontal: 24
    },
    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        flex: 1
    },
    buttonPlay: {
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