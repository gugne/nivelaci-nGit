function calcularColor (num){
    if (num==1){
        const color = "El color es negro"      
        return color
    }
    else if (num==2){
        const color = "El color es blanco"
        return color
    }

    else if (num==3){
        const color = "El color es azul"
        return color
    }
    else {
        const color = "El color es verde"
        return color
    }
}

console.log(calcularColor("1"))

// function calcularColordict (num){
//     let colores= {
//         1 : 'El color es negro',
//         2 : 'El color es blanco',
//         3 : 'El color es azul',
//     }
//     let color = colores[num] || 'verde';
//     return color;
// }

// console.log(calcularColordict("2"))

function calcularColorarr (num){
    const colores= ["El color es negro", "El color es blanco", "El color es azul"]
    let color = colores[num-1] || 'El color es verde';
    return color
}

console.log(calcularColorarr(100))