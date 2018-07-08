import * as React from 'react';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { Square } from '../Square';
import { IBoardModel } from '../../Models/IBoardModel';
import { IPlayer } from '../../Models/IPlayer';
import { Dice } from '../RollDice';
import { GameState } from '../../reducers';
import { IGameBoardModel } from '../../Models/GameBoard';
import * as GameActions from '../../Actions/gameAction';

import './Board.scss';
import { Players } from '../Player';

namespace Game {
    export interface BoardProps extends RouteComponentProps<void> {
        board: IGameBoardModel;
        actions: typeof GameActions;
    }
}

class Game extends React.Component<Game.BoardProps> {
    private diceElement: Dice;

    constructor(props: Game.BoardProps) {
        super(props);

        this.BindEvents();
    }

    private BindEvents(): void {
        this.RollDice = this.RollDice.bind(this);
    }

    private RollDice(): void {
        this.diceElement.RollDice();
    }

    public render(): JSX.Element {
        let boardBoxRow = [];
        let chuncks = [];
        for (let i = 0; i < this.props.board.Boards.length; i++) {
            chuncks.push(this.props.board.Boards[i]);

            if ((i + 1) % 10 === 0) {
                boardBoxRow.push(chuncks);
                chuncks = [];
            }
        }

        return (
            this.props.board.Boards && this.props.board.Players &&
            <div className="container-fluid">
                {
                    <div className="game row">
                        <div className="col-md-3">
                            <span className="plastic-header">Players</span>
                            <Players players={this.props.board.Players} />
                        </div>
                        <div className="col-md-6">
                            {
                                boardBoxRow.map(
                                    (boardBox, index) =>
                                        <div key={index} className="game-board-row">
                                            {boardBox.map((ele) => <Square key={ele.BoardIndex} value={ele.Value} />)}
                                        </div>
                                )
                            }
                        </div>
                        <div className="col-md-3">
                            <span className="plastic-header">Roll Dice</span>
                            <Dice ref={ref => (this.diceElement = ref)} onClick={this.RollDice} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps({ board }: GameState) {
    console.log(board);
    return {
        board: board
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(GameActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
