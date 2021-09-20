import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },
  circleContainer: {
    width: 34,
    height: 34,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  subtitle: {
    color: '#5390c9',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  }
});

export default styles;