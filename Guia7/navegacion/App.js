import * as React from 'react';
import { View, Text,SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App(){
    return(
        <>
            <StatusBar hidden={false} translucent={true} backgroundColor={"black"} barStyle={"default"}></StatusBar>
                <NavigationContainer>
                    <Navigation></Navigation>
                </NavigationContainer>
        </>
    )
}
