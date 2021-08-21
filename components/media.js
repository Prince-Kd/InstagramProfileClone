import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Posts from './posts';
import Tags from './tags';

const Tab = createMaterialTopTabNavigator();



export default function Media() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        showIcon:true,
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray'
      }}>
        <Tab.Screen options={{
          tabBarIcon: () => (
           <MaterialIcons name="grid-on" size={24} color='black' />
          )
        }} name="Posts" component={Posts} />
        <Tab.Screen options={{
          tabBarIcon: () => (
           <MaterialCommunityIcons name="tooltip-image-outline" size={24} color='black' />
          )
        }} name="Tags" component={Tags} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
