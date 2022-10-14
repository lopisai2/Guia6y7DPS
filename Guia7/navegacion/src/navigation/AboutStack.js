import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

export default function AboutStack(){
    
    const Stock=createStackNavigator();

    return(
        <Stock.Navigator>
            <Stock.Screen name="about1" component={About} options={{title:'About',}}></Stock.Screen>            
        </Stock.Navigator>
    );
}