import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    flex: 1, 
    alignItems: 'center',
  },
  stepNumberContainer: {
    backgroundColor: '#0371DB',
    minWidth: 45, 
    paddingVertical:8, 
    marginVertical: 20,
    alignItems: 'center', 
    borderRadius: 30,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito_700Bold', 
    fontSize: 20,  
    opacity: 0.85
  },
  cardDetailedStep: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 15, 
    paddingTop: 24,
    paddingBottom: 30,
    borderRadius: 15,
  },
  title: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
  },
  image: {
    width: 300,
    height:200,
    backgroundColor:"#FFFFFF",
    marginTop: 30
  },
  questionCard: {
    backgroundColor: '#F3F3F3',
    marginVertical: 20,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  questionText: {
    color: '#505050',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
  },
  actionButtons: {
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    marginTop: 35
  }
});

export default styles;