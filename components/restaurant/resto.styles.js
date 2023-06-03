import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:'100%'
      
    },
    image:{
        width:'100%',
        height:350,
        
    },
    restoName:{
        color:'white',
        fontWeight:'bold',
        fontSize:32
    },
    vrContainer:{
        flexDirection:'row',
        alignItems:'left'


    },
    vr:{
        height:40,
        borderColor:'white',
        borderWidth:1,
        marginLeft:10
        
    },
    checkOut:{
        color:'white'
    }
      
      
})
export default styles