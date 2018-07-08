import * as React from 'react';
import { IPlayer } from '../../Models/IPlayer';
import { Player } from './Container';

import './Player.scss';

export interface PlayersProps {
    players: Array<IPlayer>;
}

export class Players extends React.Component<PlayersProps> {
    constructor(props?: PlayersProps) {
        super(props);
    }

    private getPanel(isStarted: boolean): string {
        return !isStarted ? "panel" : "panel panel-border-selected";
    }


    private getPlayerItems(): JSX.Element {
        let elements = this.props.players.map((player) =>
            <div key={player.CurrentIndex} className={this.getPanel(player.IsStarted)}><Player key={player.CurrentIndex} item={player} /></div>);
        return (<div>{elements}</div>);
    }

    render(): JSX.Element {
        return (
            <div className="player">
                {this.getPlayerItems()}
            </div>
        );
    }
}
