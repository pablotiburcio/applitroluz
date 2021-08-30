import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '30%',
    backgroundColor: '#83C2FF',
    margin: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 4,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
  },
  image: {
    height: 46,
    width: 46,
  },
});

export default styles;