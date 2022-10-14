import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gatos from '../pages/gatos';
import Perros from '../pages/perros';


const Tab=createBottomTabNavigator();

export default function Multiventanas(){

    return(
        <>
            <Tab.Navigator>
                <Tab.Screen 
                name="gatos" 
                component={Gatos}
                options={{
                    title:"Gatos",                     
                    tabBarLabelStyle:{fontSize:14,color:"red"}, 
                    headerShown:false, 
                    tabBarIcon:({size,color})=>(<MaterialCommunityIcons name="cat" size={24} color="black" />) }}
                >
                </Tab.Screen>
                <Tab.Screen name="perros" component={Perros}
                options={{
                    title:"Perros",
                    tabBarLabelStyle:{fontSize:14,color:"red"},
                    headerShown:false, 
                    tabBarIcon:({size,color})=>(<MaterialCommunityIcons name="dog" size={24} color="black" />)}}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </>
    )
}