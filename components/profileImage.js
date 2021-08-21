import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProfileImage() {
  return (
    <View style={styles.picture}>
      <Image
        source={require('../assets/profile.jpg')}
        style={{ width: 90, height: 90, borderRadius: 45, }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    marginLeft: 10,
    height: 90,
    width: 90,
    borderRadius: 45,
    borderColor: '#dddd',
    borderWidth: 1,
  }
})
