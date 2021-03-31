import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import PlayerSelection from './app/containers/PlayerSelection';
import { selectPlayerAction, deselectPlayerAction } from './app/actions/playersActions';
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
  image: 'https://randomuser.mer/api/portraits/women/47.jpg',
  position: -1,
}];

const App = () => {
  const [players, setPlayers] = useState<PlayerType[]>(DUMMY_PLAYER_STATE);

  const onPlayerPress = (passedPlayers: PlayerType[], id: number) => {
    const pressedPlayer = players.find((player) => player.id === id);

    if (!pressedPlayer) {
      throw new Error('Player id was not found in player state');
    }

    if (pressedPlayer.position === -1) {
      setPlayers(selectPlayerAction(passedPlayers, id));
    }
    else {
      setPlayers(deselectPlayerAction(passedPlayers, id));
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Text>Select your players</Text>
      <PlayerSelection players={players} onPlayerPress={onPlayerPress} />
    </SafeAreaView>
  );
};

export default App;
