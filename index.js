//Arrays
//1
let arrayVacio =[];
//2
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
//3
let arrayNumerosPares = [0,2,4,6,8];
//4
let arrayBidimensional = [[0,1,2],["a","b","c"]];


//Funciones
//5
function suma(a,b){
    return a + b;
}
//6
function potenciacion(a,b){
    return a ** b;
}
//7
function separarPalabras(str) {
  return str.split(" "); //Separa por palabras;
}
//8
function repetirString(str, num) {
  let stringSumada = "";
  for (let i = 0; i < num; i++) {
    stringSumada += str;
  }
  return stringSumada;

}
//9
function esPrimo(num){
    for(let i = 2; i < num; i++)/* Ponemos i = 2 porque 
    0 y 1 no son primos- */
    {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

//Mezclando arrays y funciones.
//10
function ordenarArray(array){
    return array.sort( //El sort coloca los numeros de menor a mayor.
        function (a,b){
        return a - b;
    });
}
//11
function obtenerPares(array){
    return array.filter((num)=> num % 2 === 0);
} /* Filter recorre el array y crea uno nuevos con
elementos que cumplan la condicion*/

//12
function pintarArray (array){
    let result = array[0].toString();

    for(let i = 1; i < array.length; i++){
        result += ", " + array[i].toString();
    }
    return "[" + result + "]";
}
//13
function arrayMapi (array,funcion) {
    let otroArray = [];
    for(let i = 0; i < array.length; i++){
        otroArray[i] = funcion(array[i]);
    }
        return otroArray;
}
//14
function eliminarDuplicados(array){
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        if(!nuevoArray.includes(array[i])){
             nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

//15

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
let holaMundo = ["Hola", "Mundo"];

//17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//19
function multiplicacion(a,b){
    return a * b; 

}

//20
function division(a,b){
    return a / b;
}

//21
function esPar(num){
if(num % 2 === 0){
    return true;
    }else{
        return false;
    }
}

//22
function resta(a, b){
    return a - b;
} 
    let arrayFunciones = [suma, resta, multiplicacion];

 //23
    function ordenarArray2(array){
        return array.sort(function(a,b){
            return b - a;
        });

    }
//24
function obtenerImpares(array) {
  return array.filter((number) => number % 2 !== 0);
  //.filter devuelve un nuevo arreglo con los elementos que pasan el filtro.
}

//25
function sumarArray(array){
    let sumaTodo = 0;
    for(let i = 0; i < array.length; i++){
        sumaTodo += array[i];
    }
    return sumaTodo;
}

//26
function multiplicarArray(array){
    let multTodo = 1;
    for(let i = 0; i < array.length; i++){
        multTodo *= array[i];
    }
    return multTodo;
}
