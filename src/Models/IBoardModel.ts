import { BoardTypeEnum } from "./Enums/BoardTypeEnum";

export interface IBoardModel {
    BoardIndex: number;
    Type?: BoardTypeEnum;
    Value?: number;
    NextBoardIndex?: number;
}
