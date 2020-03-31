function createStore(reducer, initialState = {}) {
  let state = initialState;
  const listeners = [];

  function dispatch(action) {
    state = {
      ...state,
      ...reducer(state, action)
    };
    listeners.forEach(listener => listener());

    return action;
  }

  function subscribeListener(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }
  return {
    getState,
    dispatch,
    subscribeListener
  };
}

export function combineReducers(reducers) {
  const keys = Object.keys(reducers);
  return function(state = {}, action) {
    const nextState = {};
    keys.forEach(key => {
      nextState[key] = reducers[key](state[key], action);
    });
    return nextState;
  };
}

export default createStore;
