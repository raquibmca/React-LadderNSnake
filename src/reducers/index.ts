import { combineReducers } from 'redux';
import { IGameBoardModel  } from '../Models/GameBoard';
import board from './board';

export interface GameState {
    board: IGameBoardModel;
}

export default combineReducers<GameState>({
    board
});
