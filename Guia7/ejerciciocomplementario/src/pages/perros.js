import React from 'react';
import {Image,View, Text, FlatList} from 'react-native';
import style from '../utils/style';
import DataDog from '../utils/DataDog';



const Item=({imagen,nombre,origen})=>(
    <View style={style.imgflex}>
        <Image style={style.img} source={imagen} />
        <View style={style.subimgflex}>
            <Text style={style.tituloimg}>{nombre}</Text>
            <Text style={style.origenimg}>{origen}</Text>
        </View>
    </View>
);


export default function Perros(){
    

    const renderItem=({item})=>(<Item imagen={item.img} nombre={item.name} origen={item.country} />
    );

    return(
        <>
            <View style={style.contenedor}>
                
                <FlatList
                data={DataDog}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                ListHeaderComponent={
                    <Text style={style.titulo}>Razas de Perros</Text>
                }
                />
            </View>            
        </>
    )

}
