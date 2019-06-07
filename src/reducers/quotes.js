
export default (state =[]
, action) => {
  switch (action.type) {
    case 'ADD_TODO':

      //return [...state, action.quote];
      return state.concat(action.quote);

    default:
      return state;
  }
}



