// Bonus 2:
// Escribe una función llamada frecuencias que reciba un string y retorne un objeto con el número de veces que aparece cada carácter (exceptuando el espacio en blanco):
// escribe tu función acá

function frecuencias (string){
    let dict = {}
    // Primer ciclo for toma letra por letra y cada que inicia devuelve el contador a 0
    for (i of string){
        cont=0
        if (i !== ' '){
            // segundo ciclo for para aumentar el contador cada vez que se repite la letra
            for (rep of string){
                if (i === rep){
                    cont+=1
                }  
            }
            dict[i]= cont    
        }
    }
    return dict
}
// código de prueba
console.log (frecuencias("hola mundo"))
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log (frecuencias("anita lava la tina"))
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

console.log (frecuencias("perrooo"))