import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
  },
  positionOverlay: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
  positionContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});

type PropsType = {
  position: number,
  children: JSX.Element,
  testID: string,
  onPress: () => void,
}

const PositionButton = ({
  position,
  children,
  testID,
  onPress,
}: PropsType) => {
  const displayedPosition = position + 1;

  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={styles.button}>
      <View style={[styles.content]}>
        {children}
      </View>
      {position >= 0 && (
        <View testID={`${testID}.overlay`} style={[styles.content, styles.positionOverlay]}>
          <View style={styles.positionContainer}>
            <Text testID={`${testID}.overlay.text`} style={styles.text}>{displayedPosition}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PositionButton;
