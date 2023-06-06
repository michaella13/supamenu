import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    backIcon:{
        backgroundColor:'white',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginRight:270,
        marginTop:100


    },
    checkOutCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'35%',
        
    },
    checkOutText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        width:'90%'
    },
    checkout:{
        fontWeight:'bold',
        fontSize:18
    },
    totalPrice:{
        fontWeight:'bold',
        color:'#08c770',
        fontSize:18
    },
    including:{
        color:'grey',
        
    },
    upperDiv:{
        width:'95%',
        height:250,
        borderRadius:30,
        backgroundColor:'#E5E4E2',
        alignItems:'center', 
        justifyContent:'center',
        marginTop:-50,
        marginRight:20
        
      
    },
    credit:{
        backgroundColor:'white',
        width:'40%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }, 
    creditText:{
        fontWeight:'bold',
        fontSize:16
    },
    mobile:{
        backgroundColor:'#08c770',
        width:'40%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        position:'relative',
        right:20
    }, 
    mobileText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        marginTop:20
        
    },
    payments:{
        marginTop:50,
        marginLeft:50
    }, 
    pay:{
        backgroundColor:'#08c770',
        width:'85%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        position:'relative',
        right:20,
        marginTop:20,
        marginLeft:35
        
    },
    flexButton:{
        flexDirection:'row',
        
    },
    we:{
        color:'grey',
        fontWeight:'300',
        marginTop:20,
        width:250,
        textAlign:'center'
    },
    payText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        
    }
    
})
export default styles