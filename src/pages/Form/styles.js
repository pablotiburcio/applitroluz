import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


//-------------------------------style geral
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },

//------------------------------------style da seleção

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
  

//------------------------------------style do texto acima  seleção
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

//--------------------------------style do motivo de seleção
RessonsContainer:{
  backgroundColor:"#DCDCDC",  
  borderRadius:5, 
  width:268, 
  marginBottom:10, 
  marginTop:10,
  justifyContent:"center",
},


//---------------------------------style manutenção e problemas
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

//----------------------------------style do botão
button:{
     backgroundColor:"#0074E4",
     borderRadius:5,
     height:54,
     width:259,
     justifyContent:"center",
     alignSelf:"center", 

  },


});