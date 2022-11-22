function sum (arr){
    let suma= 0
    for (let i in arr){
        suma+= arr[i]        
    }
    return console.log (suma)
}
sum([1,2,3,4,5,6])