import produce from 'immer';

import { PlayerType } from '../types/PlayerType';

type newPlayerParamsType = {
  firstName: string,
  image?: string,
};

function createPlayerAction(players: PlayerType[], newPlayer: newPlayerParamsType): PlayerType[] {
  const { firstName, image } = newPlayer;

  return produce(players, (draftPlayers) => {
    draftPlayers.push({
      id: players.length,
      position: -1,
      firstName,
      image,
    });
  });
}

/*
  Selects a player by setting its position
*/
function selectPlayerAction(players: PlayerType[], id: number): PlayerType[] {
  const numberOfSelected = players
  .filter((current) => current.position > -1)
  .length;

  return produce(players, (draftPlayers) => {
    draftPlayers[id].position = numberOfSelected;
  });
}

/*
  Deselects a player by setting its position to -1
  and moving up the positions of the players that came after
*/
function deselectPlayerAction(players: PlayerType[], id: number): PlayerType[] {
  const playerObject = players.find((player) => player.id === id);
  const lastPosition = playerObject?.position || -1;

  return players.map((player) => {
    if (player.position === lastPosition) {
      return {
        ...player,
        position: -1,
      };
    }
    if (player.position > lastPosition) {
      return {
        ...player,
        position: player.position - 1,
      };
    }
    return player;
  });
}

export {
  createPlayerAction,
  selectPlayerAction,
  deselectPlayerAction,
};
