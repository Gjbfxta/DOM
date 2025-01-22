const padre = document.getElementById(parent)
const child = document.getElementById(child)
const bro = document.getElementById(sibling)

console.log(hijo.parentNode);
console.log(padre.childNodes);
console.log(padre.children);
onsole.log(padre.firstChild);

// firstElementChild -> Devuelve el primer nodo hijo, que sea un elemento de html

console.log(padre.firstElementChild);

// lastChild -> Devuelve  elk último nodo hijo, puede ser nodo de texto, comentario u elemento.

console.log(padre.lastChild);

// lastElementChild -> Devuelvbe el último nodo hijo que sea un elemento.

console.log(padre.lastElementChild);

// nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario u elemento.

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

// nextElementSibling -> Devuelve elkn siguiente nodo hermasno a que sea un elemento

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

// previousSibling -> Devuelve el anterioor nodo hermano, puede ser un nodo de texto, comentario u elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

// previousElementSibling -> Devuelve el nodo anterior nodo hermano que sea un elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);