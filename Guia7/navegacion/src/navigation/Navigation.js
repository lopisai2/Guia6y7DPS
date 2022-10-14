import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ContactStack from "./ContactStack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab=createBottomTabNavigator();

export default function Navigation(){
    
    return(
        <>
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} options={{title:"Home", headerShown:false, tabBarIcon:({size,color})=>(<FontAwesome5 name="home" size={24}/>)}}></Tab.Screen>
            <Tab.Screen name="about" component={AboutStack} options={{title:'About', headerShown:false, tabBarIcon:({size,color})=>(<FontAwesome5 name="question-circle" size={24}/>)}}></Tab.Screen>
            <Tab.Screen name="contact" component={ContactStack} options={{title:'Contact',headerTitleAlign:'center', headerShown:false, tabBarIcon:()=>(<FontAwesome5 name="phone-alt" size={24}/>)}}></Tab.Screen>
        </Tab.Navigator>        
        </>
    );
}