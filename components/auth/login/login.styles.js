import { StyleSheet } from "react-native"
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1, 
        backgroundColor:'orange'
    },
    subContainer:{
        backgroundColor:'white',
        borderRadius:50,
        height:650,
        width:'100%',
        marginTop:100
    }, 
    logo:{
        marginLeft:50,
        marginTop:10
    }, 
    welcome:{
        color:'#666699',
        fontWeight:'bold', 
        fontSize:18,
        textAlign:'center'

    },
    fill:{
        color:'#A9A9A9',
        marginTop:10,
        textAlign:'center'
    }, 
    or:{
        fontWeight:'bold',
        color:'#A9A9A9'
    },
    hrstyle:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    },
    register:{
        color:'orange',
        fontWeight:'bold',
        
    },
    dontHave:{
        color:'#A9A9A9',
    },
    dont:{
        flexDirection:'row',
        marginLeft:50,
        marginTop:20
    },
    forgot:{
        fontWeight:'bold',
        color:'orange',
        textAlign:'center',
        marginTop:10
    }
    
})
export default styles