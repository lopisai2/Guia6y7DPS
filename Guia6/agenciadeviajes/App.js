import React, { useState } from "react";
import { View,StyleSheet,Image, ScrollView, Text, Modal, Button, TouchableHighlight, StatusBar } from "react-native";
//<Text style={[styles.titulo,{textAlign:'center'},{color:'green'}]}>Imagenes de El Salvador</Text>
const App=()=>{
  const [modalVisibleplaya,setModalVisibleplaya]=useState(false);
  const [modalVisibleplatos,setModalVisibleplatos]=useState(false);
  const [modalVisiblerutas,setModalVisiblerutas]=useState(false);
  return(
    <>
     <StatusBar hidden={false} translucent={true} backgroundColor={"black"} barStyle={"default"}></StatusBar>
      <ScrollView>
        <Modal transparent={true} animationType={"slide"} visible={modalVisibleplaya} onRequestClose={()=>{
          alert('Modal has been closed.')
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la Playa</Text>
              <Text style={styles.texto}>El Salvador cuenta con hermosas playas a nivel de centroamerica</Text>
              <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType={"slide"} visible={modalVisibleplatos} onRequestClose={()=>{
          alert('Modal has been closed.')
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Las Pupusas</Text>
              <Text style={styles.texto}>El Salvador cuenta con el platillo típico más común consumido por los salvadoreños
                Las Pupusas, que pueden ser de frijol con queso, revueltas, de pollo, etc.
              </Text>
              <Button title="Cerrar" onPress={()=>{setModalVisibleplatos(!modalVisibleplatos)}}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType={"slide"} visible={modalVisiblerutas} onRequestClose={()=>{
          alert('Modal has been closed.')
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Sitio Turístico Ataco</Text>
              <Text style={styles.texto}>El Salvador tiene sitios turísticos interesantes como es 
                Concepción de Ataco goza de muchísimos atractivos turísticos, 
                sobretodo gastronómico
              </Text>
              <Button title="Cerrar" onPress={()=>{setModalVisiblerutas(!modalVisiblerutas)}}></Button>
            </View>
          </View>
        </Modal>
        <View style={styles.contenedor1}>            
            <Image style={styles.banner} source={require('./src/img/bg.jpg')}/>            
        </View>
        <View style={styles.contenedor2}>
            <Text style={[styles.titulo]}>Que hacer en El Salvador</Text>
            <ScrollView horizontal>              
              <View>
              <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
                <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')}/>
                </TouchableHighlight>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')}/>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')}/>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')}/>
              </View>
              <View>
                <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')}/>
              </View>
            </ScrollView>
            <Text style={styles.titulo}>Platillos Salvadoreños</Text>
            <View>
              <View>
                <TouchableHighlight onPress={()=>setModalVisibleplatos(!modalVisibleplatos)}>
                  <Image 
                  style={styles.mejores}
                  source={require('./src/img/mejores1.jpg')} 
                  />
                </TouchableHighlight>                
              </View>
              <View>
                <Image 
                style={styles.mejores}
                source={require('./src/img/mejores2.jpg')} 
                />
              </View>
              <View>
                <Image 
                style={styles.mejores}
                source={require('./src/img/mejores3.jpg')} 
                />
              </View>
            </View>
        </View>
        <Text style={styles.titulo}>Rutas Turísticas</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <TouchableHighlight onPress={()=>setModalVisiblerutas(!modalVisiblerutas)}>
            <Image
            style={styles.mejores}
            source={require('./src/img/ruta1.jpg')}
            />
            </TouchableHighlight>            
          </View>
          <View style={styles.listaItem}>
            <Image
            style={styles.mejores}
            source={require('./src/img/ruta2.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
            style={styles.mejores}
            source={require('./src/img/ruta3.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
            style={styles.mejores}
            source={require('./src/img/ruta4.jpg')}
            />
          </View>
        </View>

      </ScrollView>
    </>
  )
}

const styles=StyleSheet.create({
  contenedor1:{    
    flexDirection:'column',    
  },
  contenedor2:{
    marginHorizontal:10,   
  },
  banner:{
    height:250,
    flex:1,
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10,
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5,
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  listaItem:{
    flexBasis:'49%',
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1,
    paddingTop:100,
    paddingBottom:175,    
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:15,
    flex:1,    
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:18,
    justifyContent:'center',
    marginBottom:10,
    textAlign:'center',
  },
  texto:{
    fontSize:15,
  }
}
)

export default App;