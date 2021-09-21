import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
  },

  header: {
    alignItems: "center"
  },

  subtitle: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 22,
    textAlign: "center",
    lineHeight: 26,
    color: '#505050',

    marginVertical: 18,
    maxWidth: "90%"
  },

  checkboxContainer: {
    width: "90%",
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 20,

  },
  checkboxItem: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    width: "100%",
    marginVertical: 5,
    borderRadius: 10,


    fontFamily: 'Nunito_400Regular',
    fontSize: 19,
    color: '#505050'
  },

  inputContainer: {
    width: "90%"
  },

  labelInput: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 10,
    color: "#505050"
  },

  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,

    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 10,

    padding: 10,
    marginBottom: 24
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    maxWidth: '90%'
  }
});