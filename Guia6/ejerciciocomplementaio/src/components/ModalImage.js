import React from 'react';
import { StatusBar,Modal, View, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../utils/style';

export default function ModalImage(props){

    const {idimagen, titulo, descripcion, visibleon, setVisibleon}=props;
    return(
        <>
            
            <Modal style={style.modalImage}  visible={visibleon} animationType="fade" transparent={true} onRequestClose={()=>setVisibleon(false)}>
            <StatusBar hidden={false} translucent={false} backgroundColor={"white"} barStyle={"light-content"}></StatusBar>
                <View style={style.viewImage}>
                    <TouchableOpacity style={style.btncerrar} onPress={()=>setVisibleon(false)}>
                        <MaterialCommunityIcons color="black" name="close-circle" size={28}/>
                    </TouchableOpacity>
                    <Text style={style.tituloModal}>{titulo}</Text>
                    <Text style={style.descripcionModal}>{descripcion}</Text>
                </View>
            </Modal>
        </>
    )
}