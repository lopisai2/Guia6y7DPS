import { StyleSheet } from "react-native"
export default StyleSheet.create({
    contenedor:{
        height:250,        
    },
    contenedor2:{
        paddingHorizontal:5,
    },
    banner:{
        width:'100%',
        height:'100%',
    },
    img:{
        height:250,
        width:400,
        marginRight:5,
    },
    titulo:{
        fontSize:24,
        textAlign:'center'
    },
    modalImage:{
        
    },
    viewImage:{
        height:'50%',
        width:300,
        marginVertical:'50%',
        backgroundColor:"white",
        paddingHorizontal:30,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'black',
        borderRadius:15,
        
    },
    btncerrar:{
        position:'absolute',
        right:10,
        top:5,       

    },
    tituloModal:{
        paddingTop:10,
        margin:12,
        fontSize:22,
        textAlign:'center',
        fontFamily:'Roboto',

    },
    descripcionModal:{
        paddingTop:5,
        fontSize:16,
        textAlign:'justify',
        fontFamily:'Roboto',
        //Interlineado
        lineHeight:25,
    }
})