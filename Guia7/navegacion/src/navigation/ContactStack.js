import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "../screens/Contact";

export default function ContactStack(){
    
    const Stock=createStackNavigator();

    return(
        <Stock.Navigator>
            <Stock.Screen name="contact1" component={Contact} options={{title:'Contact'}}></Stock.Screen>
        </Stock.Navigator>
    );
}