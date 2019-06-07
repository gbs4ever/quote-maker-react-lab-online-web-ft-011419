
export default (state =[], action) => {
  let index
  let  quote
  console.log("hit reducer")
  switch (action.type) {
    case 'ADD_QUOTE':
 //return [...state, action.quote];
  return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
     index = state.findIndex( (quote)=>quote.id=== action.quoteId)
     //state[index]
    return [ ...state.slice(0,index),
      { ...state[index], votes: state[index].votes +=1},
     ...state.slice(index+1)]
     
      /// we need to fist match the quoteid do the one being passed in to the dispatch
    ///  then build a new object with a another attriubte of vote and incremnet it or decrement it 
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex((quote) => quote.id === action.quoteId)
      quote = state[index];
      if (quote.votes>0){
      return [...state.slice(0, index),
      { ...quote, votes: quote.votes -= 1 },
      ...state.slice(index + 1)]
      }
  default:
      return state;
  }
}






