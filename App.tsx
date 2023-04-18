import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/Login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Inventory from './src/Inventory';
import Videos from './src/Videos';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Videos" component={Videos}  />
    //     <Drawer.Screen name="Inventory" component={Inventory} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <View>
      <Login />
    </View>
  );
}
