function max (arr){
    let max=0
    for (let i in arr){
        if (max<arr[i]){
            max=arr[i]
        }
    }
    return console.log (max)
}

max ([19,2,3,4,5,20,21,50,25,22])