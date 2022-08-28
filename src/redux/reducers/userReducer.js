const defaultState={
    user:{},
    isAuth:false
}

const SET_USER="SET_USER"
const LOG_OUT="LOG_OUT"


export const userReducer=(state=defaultState,action)=>{
    switch (action.type) {
      case "SET_USER":
        console.log(action.payload)
        return {...state,user:{...action.payload},isAuth:true}
        break;
    
      case "LOG_OUT":
        return {...state,user:{},isAuth:false}
        break;
        default:
        return state;
    }
}


export const login=(payload)=>({type:SET_USER,payload})
export const logout=()=>({type:LOG_OUT})
