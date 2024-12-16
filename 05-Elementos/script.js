/* 
    Obtenemos un elemennto de referencia.
        - Este es el nodo de HTML  donde vamos a crear un nuevo elemeto.
*/
const movies = document.getElementById("movies")
/* 
    Crear un neevo elemeto usamos createElement
        document.createElement("tipoEelemento"")
     - El tipo de elemento pasa como string "" o ''
     - Se debe guardar en una variable o constante
*/
const newMovie = document.createElement("li");
/* 
    Para agregar el elemero al DOM desde la referencia usamos el metodo append()
        elemetoReferencia.append(nuevoElemento)
     - Nuevo elemeto no pasa como string.
*/
movies.append(newMovie);
/* 
    Agregamos texto al nuevo elemnto con innerText
        element.innerText = valor
     - Valor pasa con string "" o ''
*/
newMovie.innerText = "Klaus"
/* 
    Agregamos las clases al nuevo elemeto con el metodo add()
        elmento.classList.add(clase)
     - La clase pasa como string "" o ''
     - El metodo acepta más de un parametro separsndolos con comas ,
*/
newMovie.classList.add("list-item", "bg-two");
/* 
    Solitaas y solitos agreguen un  elemebto 5.
*/
const newMovie2 = document.createElement("li");
movies.append(newMovie2);
newMovie2.innerText = "Titans"
newMovie2.classList.add("list-item", "bg-one");