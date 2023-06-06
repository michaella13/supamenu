import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    restoTitle:{
        color:'orange',
        fontWeight:'bold',
        fontSize:24
    },
    order:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-between',
        marginTop:50
    },
    tableNumberInput:{
        fontWeight:100
    },
    vr:{
        borderLeftWidth:1,
        borderLeftColor:'orange'
    },
    callWaiterText:{
        color:'white',
        marginTop:10,
        fontSize:18
    },
    icon:{
        marginLeft:20
    },
    menu:{
        color:'orange',
        fontSize:32,
        fontWeight:'bold',
        marginTop:20
    },
    tableNumber:{
        color:'white',
        fontWeight:100,
        fontSize:24,

    },
    numberOrdered:{
        flexDirection:'row',
        
        width:40,
        marginLeft:100
    },
    n:{
        color:'white',
        fontSize:24,
        fontWeight:100,
        
    },
  


})
export default styles