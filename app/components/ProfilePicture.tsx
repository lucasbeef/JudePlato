/*
  Displays the picture of the player
  if the picture prop is empty displays the name
*/

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS,
  },
  title: {
    padding: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

type PropsType = {
  name: string,
  image?: string,
};

const ProfilePicture = ({ image, name }: PropsType)=> (
  <View style={styles.container}>
    { image ? (
      <Image source={{ uri: image }} style={styles.image} />
    ) : (
      <Text numberOfLines={1} style={styles.title}>{name}</Text>
    )}
  </View>
);

export default ProfilePicture;
