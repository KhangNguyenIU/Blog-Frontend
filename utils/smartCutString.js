
//reduce paragraph to a maximum of maxLength characters
export const smartCutString =(string, length) =>{
    if(string.length>length){
        return string.substring(0, length) + '...'
    }
    return string
}