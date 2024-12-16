/* 

Sellecionar el elemento h1 a traves de su clase.

*/

const titulo = document. querySelector(".titulo");

/* 

Mostramos el modo seleccionado 

-Nodo expandido -> h1...h4
-Nodo Abstracto -> h1.titulo

Algunos navegadores optimizan el nodo de representacion de los nodos por la consola

*/

console.log (titulo);

/* 

Onjeyto style

Accedemos a el usando la notacion de punto (.)
  elemento.style
El resultado css style es una lista que representa todasd las propiedades de estilo de un elemento

Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento del html.


*/

console.log (titulo.style)

/* 

Propiedades d eestilo
Accedemos a las propiedades usando la noracion de punto (.)

elemento.style.Nombrepropiedad

A diferencia de Css las propiedades de Js, se escriben usando el formato camelcase

   css -> background-color(kebab-case)
   Js  -> backgroundColor (camelCase)

*/

console.log ( titulo.style.color+" "+ titulo.style.backgroundColor);