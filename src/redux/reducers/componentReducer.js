const defaultState={
    isLoading:false,
    isError:false
}

const SET_IS_LOADING="SET_IS_LOADING"
const SET_IS_LOADED="SET_IS_LOADED"
const SET_IS_ERROR="SET_IS_ERROR"
const REMOVE_ERROR="REMOVE_ERROR"


export const componentReducer=(state=defaultState,action)=>{
    switch (action.type) {
      case "SET_IS_LOADING":
        return {...state,isLoading:true}
        break;
      case "SET_IS_LOADED":
        console.log('loaded')
        return {...state,isLoading:false}
        break;
      case "SET_IS_ERROR":
        return {...state,isError:true}
        break;
      case "REMOVE_ERROR":
        return {...state,isError:false}
        break;
        default:
        return state;
    }
}


export const setIsLoading=()=>({type:SET_IS_LOADING})
export const setIsLoaded=()=>({type:SET_IS_LOADED})
export const setIsError=()=>({type:SET_IS_ERROR})
export const removeError=()=>({type:REMOVE_ERROR})
