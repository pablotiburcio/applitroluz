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
    marginRight: 5
  },
  circleContainer: {
    backgroundColor: '#FFFFFF',
    minWidth: 32, 
    paddingHorizontal: 7, 
    paddingVertical: 5, 
    alignItems: 'center', 
    borderRadius: 18,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  counterText: {
    color: '#0371DB',
    fontFamily: 'Nunito_700Bold', 
    fontSize: 16,  
    opacity: 0.85
  },
});

export default styles;