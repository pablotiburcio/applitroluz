import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: '10%'
    },
    containerItem: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxItem: {
        width: '50%',
        height: '70%'
    },

    title: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 28,
        color: "#57606F",
    },
    subtitle: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 22,
        marginTop: 40,
        lineHeight: 24,
        maxWidth: '50%',
        textAlign: 'center',
        color: "#57606F"
    },

    buttonView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})