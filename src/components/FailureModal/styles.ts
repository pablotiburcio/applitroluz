import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 360, 
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#505050',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 26,
    textAlign: 'center'
  },
  description: {
    marginTop: 14,
    marginBottom: -10,
    color: '#505050',
    fontFamily: 'Nunito_400Regular',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;