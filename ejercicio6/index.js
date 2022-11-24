const pedro = {
    nombre: "Pedro Perez",
    edad : 30, 
    activo : true ,
    hobbies : ["programar", "squash", "piano"]
}

console.log(pedro.edad)

pedro.estatura=1.8

console.log(pedro)

delete pedro.activo

console.log(pedro)

for (let i in pedro){
    console.log(i+":"+pedro[i])
}

pedro.saluda = function(){
    console.log ("Hola me llamo "+ this.nombre)
}

pedro.saluda()