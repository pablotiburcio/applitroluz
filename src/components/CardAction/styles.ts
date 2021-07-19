import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginHorizontal: 14,
        marginBottom: 18,
        backgroundColor: "#FFF",
        borderRadius: 30,
        padding: 28,

        alignItems: 'center'
    },
    title: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 28,
        color: '#505050',
        marginTop: 14
    },
    divider: {
        marginTop: 8,
        width: "90%",
        height: 1,
        backgroundColor: "#FFB5B5"
    },
    instruction: {
        flex: 1,
        marginTop: 12,
        fontFamily: "Nunito_400Regular",
        textAlign: 'center',
        fontSize: 22,

    },

});