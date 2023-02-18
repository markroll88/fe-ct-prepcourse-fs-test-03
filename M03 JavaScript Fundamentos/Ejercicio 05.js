/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   
  // var resto = (num%2);
   /*if (num === 0) { return str;}
   else {
      if ((num !== 0)&&(resto === 0)) {str2='Es Positivo'; return str2;}
          else { return str3;}
   }*/
   if (num > 0) {return 'Es positivo';}
   else {if (num < 0) {return 'Es negativo';}
         else {return false}
}
}


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:

   return str + '!';


}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:

   return nombre + " " + apellido;
}
      
function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   /*var nombre = 'Martin';
   var saludo = 'Hola' + nombre +'!';
   return saludo;*/
  /* var nombre = 'Martin' ;
   return 'Hola' + nombre + '!';*/
   /*var saludo = 'Hola' + nombre + '!';
   return saludo;*/
   
   return 'Hola' + " " + nombre +'!';

}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var area = alto * ancho;
   return area;
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var perimetro = lado * 4;
   return perimetro;
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código: 
   //var triangulo = ((base*altura)/2);
   return ((base*altura)/2);
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   var euroValor = 1.20;
   var euroADolar = euro * euroValor;
   return euroADolar;
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
  /*
   if (letra.length > 1) {return 'Dato incorrecto';}
      else { if (letra == 'a'||'e' || 'i' ||'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U') { return 'Es vocal';}
      else {return 'Dato incorrecto';}
       }
       */
   /*if ((letra.length > 1)|| (letra !== 'a'||'e' || 'i' ||'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U')) {
         return 'Dato Incorrecto'}
         else { return 'Es vocal';}*/
/*
   if (letra.length > 1) {return 'Dato incorrecto';} 
   else { if (letra !== 'a'||'e' || 'i' ||'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U') { return 'Dato incorrecto';}
          else return 'Es vocal';*/
   if (letra.length > 1) {return 'Dato incorrecto';} 
 //  if (letra !=='a'||'e' ||'i' ||'o' ||'u' ||'A' ||'E' ||'I' ||'O' ||'U') { return 'Dato incorrecto';}
   if((letra ==='a')||(letra ==='e') ||(letra ==='i' )|| (letra ==='o' )||(letra ==='u') ||(letra ==='A') ||(letra ==='E')||(letra ==='I')||(letra ==='O')||(letra ==='U')) {return 'Es vocal'}else {return 'Dato incorrecto';}      
}  
       


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
