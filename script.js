let nombre = prompt("Ingrese nombre del alumno")
let materia
let acumulado = 0
for(let i=1; i<8 ; i++){
    if (i===1){
        materia ="matematicas"
    } else if (i===2){
        materia ="lengua"
    } else if (i===3){
        materia ="cs. sociales"
    } else if (i===4){
        materia ="cs. naturales"
    } else if (i===5){
        materia ="ed. fisica"
    } else if (i===6){
        materia ="ingles"
    } else if  (i===7){
        materia ="informatica"
    } else {materia=""}
    let flag = 1
    do { let nota = parseFloat(prompt("Ingrese nota de "+ materia))
         if (nota >=1 && nota <=10)
            {acumulado += nota
            flag = 0} 
         else {alert("ERROR: Ingrese una nota valida entre 1 y 10")
            flag = 1}
    } while (flag === 1)
}

alert("El promedio de "+ nombre + " en la escuela es: " + acumulado/7)
