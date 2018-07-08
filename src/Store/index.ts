import { applyMiddleware, createStore, Middleware, Store, StoreCreator } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { GameState}  from '../reducers';

export function configureStore(initialState?: GameState): Store<GameState> {
    let middlewares: Array<Middleware> = [thunk];

    const createStoreWithMiddleware: StoreCreator = applyMiddleware.apply(null, middlewares)(createStore);
    const store: Store<GameState> = createStoreWithMiddleware(rootReducer, initialState) as Store<GameState>;
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
