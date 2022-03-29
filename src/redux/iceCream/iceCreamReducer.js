import { BUY_ICECREAM } from "../actionTypes";

const initState = {
    numOfIceCreams: 20
}

const reducer = (state=initState, action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

export default reducer;