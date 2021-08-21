import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ProfileImage from './profileImage';
import Stats from './stats';
import Bio from './bio';
import Media from './media';

export default function Body() {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 10
        }}>
        <ProfileImage />
        <Stats />
      </View>
      <Bio />
      <Media />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
