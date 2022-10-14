import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contenedor:{
        paddingHorizontal:10,
        backgroundColor:'white',
    },
    imgflex:{
        flex:1,
        flexDirection:'row',
        marginBottom:30,       

    },
    subimgflex:{
        flex:1,
        flexDirection:'column',
    },
    img:{
        height:125,
        width:'40%',
    },
    titulo:{
        fontSize:24,
        textAlign:'center',
        marginVertical:10,
    },
    tituloimg:{
        fontSize:16,
        fontWeight:'600',    
        textAlign:'center',   
        marginHorizontal:24,
    },
    origenimg:{
        fontSize:14,
        fontStyle:'italic',
        textAlign:'center'
    }
})