import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get('window')

export default function Posts() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
        style={{
          marginVertical: 1,
          backgroundColor: '#ddd',
          marginHorizontal: 1,
          height: 100,
          width: width/3,
        }}></View>
        <View
        style={{
          marginVertical: 1,
          backgroundColor: '#ddd',
          marginHorizontal: 1,
          height: 100,
          width: width/3,
        }}></View>
        <View
        style={{
          marginVertical: 1,
          backgroundColor: '#ddd',
          marginHorizontal: 1,
          height: 100,
          width: width/3,
        }}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
        style={{
          marginVertical: 1,
          backgroundColor: '#ddd',
          marginHorizontal: 1,
          height: 100,
          width: width/3,
        }}></View>
        <View
        style={{
          marginVertical: 1,
          backgroundColor: '#ddd',
          marginHorizontal: 1,
          height: 100,
          width: width/3,
        }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
