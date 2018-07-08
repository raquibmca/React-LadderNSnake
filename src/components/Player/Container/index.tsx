import * as React from 'react';
import { IPlayer } from '../../../Models/IPlayer';

export interface PlayerProps {
    item: IPlayer;
}

export class Player extends React.Component<PlayerProps, {}> {
    constructor(props?: PlayerProps, context?: any) {
        super(props, context);
    }

    private getHeader(isStarted: boolean): string {
        return isStarted ? "header" : "header-disabled";
    }

    render(): JSX.Element {
        return (
            <div className="player-panel">
                <div className={this.getHeader(this.props.item.IsStarted)}>{this.props.item.Name}</div>
                <div className="curval">Board Value {this.props.item.CurrentDiceVal}</div>
                <div className="curval">Dice Value  {this.props.item.CurrentIndex}</div>
            </div>
        );
    }
}
