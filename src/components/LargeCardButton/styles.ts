import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 2,
    shadowOpacity: 0.18,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  circleContainer: {
    height: 30,
    width: 30,
    backgroundColor: '#83C2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
  },
  title: {
    color: '#606060',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    paddingLeft: 15,
    flex: 1,
  }
});