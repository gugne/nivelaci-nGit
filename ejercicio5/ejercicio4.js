function join (arr){
    let new_string=""
    for (let i in arr){
        new_string+=arr[i]+" "
    }
    return console.log(new_string)
}

join (["hola", "Make", "it", "real"])


