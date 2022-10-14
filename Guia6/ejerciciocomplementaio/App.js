import React, { useState } from "react";
import { FlatList,View,StyleSheet,Image, ScrollView, Text, Modal, Button, TouchableHighlight, SafeAreaView, StatusBar, TouchableOpacity} from "react-native";
import ModalImage from "./src/components/ModalImage";
import Data from "./src/components/Data";
import style from "./src/utils/style";
const ImagenHabitacion=Data.filter(element=>element.id>=0&&element.id<=1);
const ImagenServicios=Data.filter(element=>element.id>=6&&element.id<=9);
const ImagenLugaresInteres=Data.filter(element=>element.id>=2&&element.id<=5);


export default function App(){  

  const [modal,setModal]=useState(false);
  const [id,setId]=useState(0);  
  const Item=({imagen})=>(
    <>
      <View style={style.viewimg}>
        <Image style={style.img} source={imagen}/>
      </View>
    </>
  )
  const renderItem=({item})=>(
    <TouchableOpacity onPress={()=>{setModal(true), setId(item.id)}}><Item imagen={item.img} /></TouchableOpacity>
  ) 
  
  return(    
    <>
      <StatusBar hidden={false} translucent={false} backgroundColor={"black"} barStyle={"light-content"}></StatusBar>
        <ScrollView>
                          
          {/*Banner del Hotel*/}
          <View style={style.contenedor}>            
              <Image style={style.banner} source={require('./src/img/bg.jpg')}/>            
          </View>

          {/* Sección de Habitaciones*/}

          <View style={style.contenedor2}>
              <Text style={[style.titulo]}>Habitaciones</Text>
              <FlatList horizontal
                data={ImagenHabitacion}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
              />
          
              {/*Sección de Servicios */}

              <Text style={style.titulo}>Servicios que ofrecemos</Text>
              <FlatList horizontal
                data={ImagenServicios}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
              />                  

          {/*Sección de Lugares más atractivos del hotel */}

              <Text style={style.titulo}>Lugares de Interes</Text>
              <FlatList horizontal
                data={ImagenLugaresInteres}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
              />          
          </View>        
          
      </ScrollView>    
      <ModalImage titulo={Data[id].titulo} descripcion={Data[id].descripcion} visibleon={modal} setVisibleon={setModal}/>
    </>
  )
}
