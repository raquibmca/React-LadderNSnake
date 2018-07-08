import { IPlayer } from "./IPlayer";
import { IBoardModel } from "./IBoardModel";

export interface IGameBoardModel {
    Players: Array<IPlayer>;
    Boards: Array<IBoardModel>;
    CurrentPlayerIndex: number;
}
