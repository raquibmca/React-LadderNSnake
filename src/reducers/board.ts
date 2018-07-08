import { handleActions } from 'redux-actions';
import * as Actions from '../Constant/actionType';

import { IGameBoardModel } from "../Models/GameBoard";

const intialBoardData: IGameBoardModel = {
    Players: [],
    Boards: [],
    CurrentPlayerIndex: 1
};

export default handleActions<IGameBoardModel, any>(
    {
        [Actions.LOAD_BOARD]: (state, action) => {
            return {
                ...state,
                Boards: action.payload
            };
        },
        [Actions.LOAD_PLAYER]: (state, action) => {
            return {
                ...state,
                Players: action.payload
            };
        }
    },
    intialBoardData
);
