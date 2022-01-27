import { ADD_USER } from "../constant/auth.constant"


export const addUser = (user) => {
    return (dispatch)=>{
        dispatch({
            type: ADD_USER,
            payload: user
        })
    }
}