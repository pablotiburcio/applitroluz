import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
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
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
  },
});

export default styles;