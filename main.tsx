import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import Game from './src/components/Board';
import { configureStore } from './src/Store';
import { GameState } from './src/reducers';
import { loadGameBoard, loadPlayers } from './src/Actions/gameAction';

const store: Store<GameState> = configureStore(void 0);

initializeApp();

function initializeApp(): void {
    store.dispatch(loadGameBoard())
        .then(() => store.dispatch(loadPlayers()));
}

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('app')
);
