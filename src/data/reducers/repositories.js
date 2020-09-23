const initialState = {
  items: [],
}

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateRepositories':
      return action.payload.repositories;
    case 'clearRepositories':
      return initialState;
    default:
      return state;
  }
}

export default repositoriesReducer;