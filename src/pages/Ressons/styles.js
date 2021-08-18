import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   



//---------------------style geral------------------------------------------
  container: {
    backgroundColor:"#fff",
    paddingTop:50,
    flex: 1,
  },



  //---------------------styles  do checkeBox------------------------------------------
  checkboxContainer: {
    paddingLeft:80,
    borderColor:"#fff",
    flexDirection: "row",
    marginBottom: 20,
    
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
  color :"#505050",
    margin: 8,
  },



  //---------------------styles  do Do Input e botoes------------------------------------------

    button:{
     backgroundColor:"#0074E4",
     alignSelf:"center",
     alignItems:"center",
     justifyContent:"center",
     borderRadius:5,
     height: 40,
     width:249
  },
   input: {
    backgroundColor:"#fff",
    height: 100,
    margin: 12,
    borderColor:"gray",
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});