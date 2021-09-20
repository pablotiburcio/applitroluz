import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  ViewPickerContainer:{
    flexDirection: "row"
  },
  ViewPicker:{
    borderRadius:5,
    marginLeft:42,
    marginRight:35,
    width:100,
    height:42,
    borderWidth:2,
    borderColor:"blue",
    textAlign:"center",
    justifyContent:"center",
    alignContent:"center",
  },
  TextViewPickerContainer:{
    flexDirection:"row"
  },
  TextViewPicker:{
    marginRight:25,
    marginLeft:50,
    width:110,
    height:19,
    fontSize:12
  },
  RessonsContainer:{
    backgroundColor:"#DCDCDC",  
    borderRadius:5, 
    width:268, 
    marginBottom:10, 
    marginTop:10,
    justifyContent:"center",
  },
  MaintenanceDone:{
    backgroundColor:"#DCDCDC",
    borderRadius:5, 
    width:268, 
    marginBottom:10, 
    marginTop:10,
    borderWidth:2,
    borderColor:"blue",
    justifyContent:"center",
    
  },
  MaintenanceDoneContainer:{
    marginTop:10
  },
  button:{
    backgroundColor:"#0074E4",
    borderRadius:5,
    height:54,
    width:259,
    justifyContent:"center",
    alignSelf:"center", 
  },
});