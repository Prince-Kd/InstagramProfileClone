import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome, Entypo, SimpleLineIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>__ice_.prince</Text>
        <Entypo name="chevron-down" color="black" size={18} style={{marginTop: 7}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <FontAwesome name="plus-square-o" color="black" size={25} />
        <SimpleLineIcons
          name="menu"
          color="black"
          size={24}
          style={{ marginLeft: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10

  },
});
