import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 50
  },
  imageWrapper: {
    backgroundColor: '#54ABFF', 
    width: 120, 
    height: 120, 
    padding: 10, 
    borderRadius: 25
  },
  title: {
    color: '#57606F',
    fontSize: 24,
    marginTop: 40
  },
  subtitle: {
    fontSize: 22, 
    marginTop: 30
  }
});

export default styles;