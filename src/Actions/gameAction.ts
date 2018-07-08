import * as Actions from "../Constant/actionType";

export const loadGameBoard = () => {
    return (dispatch, getState) => {
        let promise: Promise<any> = new Promise(resolve => {
            return fetch('src/Data/Board.json')
                .then(data => {
                    return data.json();
                })
                .then(elements => {
                    let boards = elements.BoardBox.map((e) => {
                        return {
                            BoardIndex: e.Index,
                            Value: e.Value,
                            Type: e.Type,
                            NextBoardIndex: e.NextIndex
                        }
                    })
                    var action: any = {
                        type: Actions.LOAD_BOARD, 
                        payload: boards
                    };
                    dispatch(action);
                    resolve();
                },
                function (error) {
                    // error handling here?
                }
            );
        });
        return promise;
    };
};

export const loadPlayers = () => {
    return (dispatch, getState) => {
        let promise: Promise<any> = new Promise(resolve => {
            return fetch('src/Data/Player.json')
                .then(data => {
                    return data.json();
                })
                .then(elements => {
                    let boards = elements.Players.map((e) => {
                        return {
                            Name: e.Name,
                            CurrentIndex: e.CurrentIndex,
                            CurrentDiceVal: e.CurrentDiceVal,
                            IsComp: e.IsComp,
                            IsStarted: e.IsStarted
                        }
                    })
                    var action: any = {
                        type: Actions.LOAD_PLAYER,
                        payload: boards
                    };
                    dispatch(action);
                    resolve();
                },
                    function (error) {
                        // error handling here?
                    }
                );
        });
        return promise;
    };
};
