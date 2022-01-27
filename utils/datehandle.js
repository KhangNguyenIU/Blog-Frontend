export const convertToLocaleDate = date=>{
    let newDate = new Date(date)
    return newDate.toLocaleDateString()
}