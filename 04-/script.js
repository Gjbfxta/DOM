/* 

Accedemos al primer elemento de la lista

*/

const botanas = document.getElementsByTagName("li");


/* 

    Propieeddad classList

     Accdemos a la lista de clsses que tiene un elemento

        elemento.classList

     - Devuelve un DOM Token list (Listaddod dde clases en el DOM) en tipo array.

*/

console.log( botanas[0].classList );
console.log( botanas[0].classList[0] ); // Acceso a clases a traves de su indice

/*

    Para agrgar clases utilizamos el método add()

        elemento.classList.add(clase)

     - El nombre de la clase pasa como string entre "" o ''

*/

botanas[1].classList.add("bg-lightpink");

/* 

    Verificar si existe una clase especifica en un elemento con el metodo contains()

        elemento.classList.contains("clase")

     - Develve true si existe la clase.
     - Develve falsse si no exisste la clase.
     - La clase pasa como string

*/

console.log(botanas[2].classList.contains("botana")); // true
console.log(botanas[2].classList.contains("bg-lightblue")); // false

/* 

    Para elibiniar una classe utilizamos el metodo remove()

        elemento.classList.remove("clase")

     - La clase pasa como un string entre "" o  ''

*/

botanas[3].classList.add("bg-lightpink");
botanas[3].classList.remove("bg-lightpink");