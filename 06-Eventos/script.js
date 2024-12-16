/* 

Un evento es una accion que ocurre en el navegador o un elmento DOM.
Puede ser iniciado por el usuario o por el sistema.

menjar eventos significa escribir codigo que reaccione de cierta manera cuando algo especifico suceda.

1. target
objetivo o blanco es el elemnto del dom en el que ocurre el evento. este elemnton se encuientra dentro del objeto evento

2. Event listeneer 
es el odio q espera o esa atento a que ocurra un evento en un elemto especifico. usamos el metodo addeventlistener

3. Trigger
Es el desancadenante q preovocxa q uhn evento ocurra. eS LA ACCION QUE REALIZA El usuario para activare un evento.
mover y dar click

4. Event handler
Es la funcion q se ejecuta cada vez que ocurre el evento. como mostrar un mensaje, cambiar de color.

Sintaxis 
-target: elemento donde ocurre el evento
-listeneer: Escucha y detecta el evento
-trigger: la accion que ocurre en el evento
-handler: la funcioh q se ejecuta al ocurrir el evento

*/

const button = document.getElementById("button");

button.addEventListener("click" , mostrarMensaje );

function mostrarMensaje() {
  console.log("le haz picado");
}
