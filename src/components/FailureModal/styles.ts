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
  modalIcon: {
    backgroundColor: 'white',
    marginRight: 6,  
    borderRadius:55
  },
  title: {
    color: '#505050',
    fontFamily: 'Nunito_700Bold',
    fontSize: 26
  },
  description: {
    color: '#808080',
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;