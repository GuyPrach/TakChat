import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import ChatMenu from '../screens/Chat/ChatMenu';
import Setting_page from '../screens/setting/Setting_page';
import Home_page from "../screens/home/Home_page";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home_page}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="TakChat"
            component={ChatMenu}
            options={{
              tabBarLabel: "Chat",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="envelope-o" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting_page}
            options={{
              tabBarLabel: "Setting",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="gears" color={color} size={size} /> ),
              headerShown : false
            }}
          />
        </Tab.Navigator>
      );
    

}