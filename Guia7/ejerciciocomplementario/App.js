import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Multiventanas from './src/navigation/Multiventanas';
import Gatos from './src/pages/gatos';
export default function App(){
  return(
    <>
      <StatusBar hidden={false} translucent={false} backgroundColor={"black"} barStyle={'light-content'}></StatusBar>    
      <NavigationContainer>
        <Multiventanas />
      </NavigationContainer>
    </>
  )
}