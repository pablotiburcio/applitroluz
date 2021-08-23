import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72BAFF',
    paddingHorizontal: 20,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  cardDetailedStep: {
    backgroundColor: '#E9E6F0',
    alignItems: 'center',
    paddingHorizontal: 22, 
    paddingTop: 24,
    paddingBottom: 30,
    borderRadius: 15,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
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
    marginVertical: 35,
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
    flexDirection: 'row', 
    justifyContent: 'space-around'
  }
});

export default styles;