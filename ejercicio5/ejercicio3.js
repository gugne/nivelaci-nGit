function maxIndex(arr){
    let max_index=0
    let max_number=0
    for (let i in arr){
        if (max_number<arr[i]){
            max_number=arr[i]
            max_index=i
        }
    }
    if (max_index===0){
        return console.log(-1)
    }
    else{
        return console.log(max_index)
    }
    
}
maxIndex([1000,100,5,10,2,3,55])

// or
function maxIndex1(arr){
    let max=0
    for (let i in arr){
        if (max<arr[i]){
            max=arr[i]
        }
    }
    const index= arr.indexOf(max)
    if (index===0){
        return console.log(-1)
    }
    else{
        return console.log(index)
    }
    
}
maxIndex1([1,3,5,60,2,3,55])
