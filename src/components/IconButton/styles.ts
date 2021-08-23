import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    padding: 15, 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
  },
});

export default styles;