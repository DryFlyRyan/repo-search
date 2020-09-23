import repositories from './repositories';

const sliceMap = {
  repositories: repositories,
}

export const updateStore = (state = {}, action = {}) => {
  return Object.entries(sliceMap).reduce((store, [key, reducer]) => {
    store[key] = reducer(state[key], action);
    return store;
  }, {})
}

export const combinedReducer = (state, action) => updateStore(state, action);