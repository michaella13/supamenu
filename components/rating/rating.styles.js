import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

container:{
    backgroundColor:'black',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
},
successImage:{
    width:300,
    marginBottom:50
},
paymentSuccess:{
    color:'orange',
    fontWeight:'bold',
    textAlign:'center',
    width:'55%'
},
we:{
    color:'white',
    textAlign:'center',
    width:'75%',
    marginTop:10
},
check:{
   flexDirection:'row' ,
   marginTop:20,
   marginBottom:20
},
checkText:{
    color:'orange',
    fontWeight:'bold',
    marginRight:20
},
logo:{
    marginTop:40
},
stars:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'75%',
    marginTop:40,
    marginBottom:40
}
})

export default styles;