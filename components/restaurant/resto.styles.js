import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%'

    },
    image: {
        width: '100%',
        height: 350,

    },
    restoName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32
    },
    vrContainer: {
        flexDirection: 'row',
        marginRight: 250,
        marginTop: 20,
        marginBottom: 20

    },
    vr: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 10

    },
    checkOut: {
        color: 'white',
        fontWeight: 100,
        fontSize: 18,
        marginTop: 10
    },
    // hrStyle: {
    //     borderTopWidth: 2,
    //     borderTopColor: 'red',
    //     borderTopStyle: 'dashed',
    // }


})
export default styles
