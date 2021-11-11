import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#54ABFF',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
    flex: 1, 
    alignItems: 'center',
  },
  card: {
    width: '96%',
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 15,
    elevation: 4
  },
  title: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  imageContainer: {
    backgroundColor:"#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 30,
    borderRadius: 10,
    elevation: 1
  },
  image: {
    width: 300,
    height:200,
  },
  questionCard: {
    backgroundColor: '#F9F9F9',
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 1,
  },
  questionText: {
    color: '#505050',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
  },
  actionButtons: {
    width: '95%',
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 10
  }
});

export default styles;