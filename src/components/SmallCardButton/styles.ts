import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#C2E1FF',
    margin: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 4,
  },
  imageContainer: {
    backgroundColor: '#EBECED',
    borderRadius: 40, 
    padding: 5, 
    marginBottom: 10, 
    elevation: 2
  },
  image: {
    height: 45,
    width: 45,
  },
  title: {
    color: '#1F7EDB',
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    lineHeight: 17
  }
});

export default styles;