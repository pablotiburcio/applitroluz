import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    alignItems: "center"
  },

  headerTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 28,
    color: '#505050',

    marginVertical: 28,
    maxWidth: "70%"
  },

  form: {
    width: "85%",
  },

  labelForm: {
    color: '#404040',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8
  },

  reason: {
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 5,

    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: '#505050'
  },

  wrapperView: {
    flexDirection: 'row',
    marginTop: 10
  },

  textInput: {
    width: '100%',
    maxWidth: '80%',

    height: 42,

    marginRight: 15,
    borderWidth: 2,

    borderRadius: 8,
    borderColor: "#278CC5",
    backgroundColor: '#ECE7E7',
    textAlign: "center",
    justifyContent: "center",

    color: '#505050',
    fontFamily: "Nunito_700Bold",
    fontSize: 16
  },

  pickerBox: {
    backgroundColor: '#ECE7E7',
    width: '100%',
    borderRadius: 8,
    borderColor: "#278CC5",
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
  },

  rowStyle: {
    backgroundColor: '#ECE7E7',
  },
  rowTextStyle: {
    color: '#505050',
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
  },

  MaintenanceDone: {
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    width: 268,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "blue",
    justifyContent: "center",

  },

  MaintenanceDoneContainer: {
    marginTop: 10

  },

  //----------------------------------style do botão
  button: {
    backgroundColor: "#0074E4",
    borderRadius: 5,
    height: 54,
    width: 259,
    justifyContent: "center",
    alignSelf: "center",

  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    maxWidth: '90%'
  }

});