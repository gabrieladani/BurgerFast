import React, { useState, Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Login from './src/components/Login/login'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  )
}

function ProdutosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

function LogarScreen({ navigation }) {
  const [user, setUser] = userState(null);
  if(!user){
    return <Login changeStatus= {(user) => setUser(user)}/>
 }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"screenOptions={{
        drawerStyle: {
          backgroundColor: 'gray',
          width: 240,
        },
      }}>
        <Drawer.Screen options={{
        drawerIcon : config => <Icon
        size={23}
        name={'home'}></Icon>
        }}
        name="Home" component={'HomeScreen'}/>

      <Drawer.Screen options={{
        drawerIcon : config => <Icon
        size={23}
        name={'md-person'}></Icon>
        }}
        name="Logar" component={'LogarScreen'}/>

      <Drawer.Screen options={{
        drawerIcon : config => <Icon
        size={23}
        name={'cart'}></Icon>
        }}
        name="Produtos" component={'ProdutosScreen'}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}