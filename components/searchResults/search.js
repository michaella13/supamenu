import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    backIcon:{
        backgroundColor:'#E5E4E2',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5

    },
    searchBar:{
        flexDirection:'row'

    },
    drinks:{
        color:'orange',
        fontWeight:100,
        fontSize:28,
        flexDirection:'row'
    },
    drinkImage:{
        borderRadius:20,
        width:70,
        height:70,
        marginRight:20
        
    },
    drinkDetails:{
        backgroundColor:'#E5E4E2',
        flexDirection:'row',
        width:'90%',
        height:90,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    drinkName:{
        fontWeight:100,
        fontSize:12
    },
    barista:{
        fontWeight:'bold',
        color:'gray'
    },
    

    
    textSection:{
        marginRight:50
    },
   
   
    searchInput:{
        width:'70%',
        marginLeft:20
    },
    hr:{
        borderBottomColor:'#E5E4E2',
        borderBottomWidth:1
       },
    near:{
        color:'orange',
        
    }

})
export default styles