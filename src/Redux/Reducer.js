import { DECREMENT, DIRECTSHOW, HANDLERESET, HANDLESHOW, INCREMENT } from "./ActionTypes"

const initialState = {
    count : 0,
    textP :"",
    show : false
}


const Reducer=(state = initialState,action)=>{
    switch (action.type) {     
        case INCREMENT : return {...state,count : state.count +1}
        case DECREMENT : return {...state,count : state.count -1}
        case DIRECTSHOW : return {...state,textP : action.payload}
        case HANDLESHOW : return {...state,show : !state.show}
        case HANDLERESET : return {...state, count : 0, textP :'',show : false}
        default: return state
    }
}

export default Reducer