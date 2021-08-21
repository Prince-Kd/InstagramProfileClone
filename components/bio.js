import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Bio() {
  return (
    <View style={{ marginTop: 12, marginLeft: 6, paddingHorizontal: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>Mawuli Prince Kwadzofio</Text>
      <Text>Ball is life</Text>
      <Text>Real hooper***</Text>
      <Text>#iceinmyveins</Text>
      <Text>G. O. A. T is @easymoneysniper</Text>
      <View style={{ flexDirection: 'row', marginTop: 22 }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',
            borderRadius: 5,
            borderWidth: 1,
            flex: 10,
            paddingVertical: 8,
            marginRight: 10
          }}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',
            borderRadius: 5,
            borderWidth: 1,
            flex: 1,
            paddingVertical: 8
          }}>
          <Entypo
            name="chevron-down"
            color="black"
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: 15}}>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>Story Highlights</Text>
          <Entypo name="chevron-down" color="black" size={10} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
