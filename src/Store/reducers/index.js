const INITIAL_STATE={
    currentFavourite:[]
}

export default function favouriteReducer(state=INITIAL_STATE,action){
switch(action.type){
    case "SET_FAVOURITE":
    return{
        ...state,
        currentFavourite:action.payload
    }
    default:
        return state
}}