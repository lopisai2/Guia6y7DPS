import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

export default function HomeStack(){
    
    const Stock=createStackNavigator();

    return(
        <Stock.Navigator>
            <Stock.Screen name="home1" component={Home} options={{title:'Home'}}></Stock.Screen>
        </Stock.Navigator>
    );
}