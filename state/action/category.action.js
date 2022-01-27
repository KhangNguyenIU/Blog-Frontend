import { GET_ALL_CATEGORIES } from "../constant/category.constant"

export const getAllCategoriesAction =(categories)=>{
    return (dispatch)=>{
        dispatch({
            type:GET_ALL_CATEGORIES,
            payload:categories
        })
    }
}