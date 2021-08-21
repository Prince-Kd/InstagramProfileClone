import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Stats() {
  return (
    <View style={styles.holder}>
      <View style={styles.stat}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>5</Text>
        <Text>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>1,990</Text>
        <Text>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>2,233</Text>
        <Text>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 30,
    justifyContent: 'space-between'
  },
  stat: {
    alignItems: 'center',
  }
});
