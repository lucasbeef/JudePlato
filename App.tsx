import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { Button } from 'react-native-ui-lib';

import PlayerSelection from './app/containers/PlayerSelection';
import {
  selectPlayerAction,
  deselectPlayerAction,
  createPlayerAction,
} from './app/actions/playersActions';
import NewPlayerModal from './app/components/NewPlayerModal';
import { PlayerType } from './app/types/PlayerType';

const DUMMY_PLAYER_STATE = [{
  id: 0,
  firstName: 'Gilbert',
  image: 'https://randomuser.me/api/portraits/men/22.jpg',
  position: -1,
}, {
  id: 1,
  firstName: 'Jean-Louis',
  image: 'https://randomuser.me/api/portraits/men/12.jpg',
  position: -1,
}, {
  id: 2,
  firstName: 'Lucienne',
  image: 'https://randomuser.me/api/portraits/women/12.jpg',
  position: -1,
}, {
  id: 3,
  firstName: 'Irène-Louis-Marie',
  image: 'https://randomuser.me/api/portraits/women/47.jpg',
  position: -1,
}];

const App = () => {
  const [players, setPlayers] = useState<PlayerType[]>(DUMMY_PLAYER_STATE);
  const [newPlayerModalOpened, setNewPlayerModalOpened] = useState(false);

  function onPlayerPress(currentPlayerState: PlayerType[], id: number) {
    const pressedPlayer = players.find((player) => player.id === id);

    if (!pressedPlayer) {
      throw new Error('Player id was not found in player state');
    }

    if (pressedPlayer.position === -1) {
      setPlayers(selectPlayerAction(currentPlayerState, id));
    }
    else {
      setPlayers(deselectPlayerAction(currentPlayerState, id));
    }
  }

  function onCreatePlayerPress(currentPlayerState: PlayerType[], name: string) {
    setPlayers(
      createPlayerAction(currentPlayerState, {
        firstName: name,
        image: '',
      })
    );
  }

  return (
    <SafeAreaView>
      <NewPlayerModal
        modalVisible={newPlayerModalOpened}
        closeModal={() => setNewPlayerModalOpened(false)}
        onValidate={(name) => onCreatePlayerPress(players, name)}
      />
      <StatusBar barStyle="light-content" />
      <Text>Select your players</Text>
      <PlayerSelection players={players} onPlayerPress={onPlayerPress} />
      <Button
        label="New Player"
        backgroundColor="blue"
        onPress={() => setNewPlayerModalOpened(true)}
      />
    </SafeAreaView>
  );
};

export default App;
