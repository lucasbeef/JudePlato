import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PositionButton from '../components/PositionButton';
import ProfilePicture from '../components/ProfilePicture';
import { PlayerType } from '../types/PlayerType';

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

type PropsType = {
  players: PlayerType[],
  onPlayerPress: (players: PlayerType[], id: number) => void,
}

/* TODO make the component generic using a renderProp or hook */
const PlayerSelection = ({
  players,
  onPlayerPress,
}: PropsType) => {
  const renderPlayer = (player: PlayerType) => (
    <PositionButton
      onPress={() => onPlayerPress(players, player.id)}
      position={player.position}
      testID={`playerSelection.playerButton.${player.id}`}
    >
      <ProfilePicture image={player.image} name={player.firstName} />
    </PositionButton>
  );

  return (
    <FlatList
      data={players}
      numColumns={4}
      testID="playerSelection"
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => renderPlayer(item)}
    />
  );
};

export default PlayerSelection;
