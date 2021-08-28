import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
  actionBar: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    flex: 1
  },
  stepByStepButton: {
    height: 34,
    width: 34,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    borderRadius: 20,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});