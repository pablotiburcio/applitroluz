import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   

//---------------------style geral------------------------------------------
  container: {
    backgroundColor:"#fff",
    paddingTop:50,
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },



  //---------------------styles  do checkeBox------------------------------------------
  checkboxContainer: {
    borderWidth:1,
    paddingRight:10,
    borderColor:"gray",
    borderRadius:5,
    flexDirection: "row",
    marginBottom: 20,
    
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:5,
    tintColor:"green"
    
  },
  labelNS: {
  color :"#505050",
  marginRight:80,
    margin: 8,
  },
  labelNTM: {
  color :"#505050",
    margin: 8,
    marginRight:27,
  },
  labelNTF: {
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
     width:249,
  },
   input: {
    backgroundColor:"#fff",
    width:290,
    height: 100,
    margin: 12,
    borderColor:"gray",
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});