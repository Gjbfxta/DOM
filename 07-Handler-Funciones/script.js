/* 

handler - Functions
The handler in an event is a function that is executed when it happens.

There are three ways to write the hndler function

1. As an external function
2. As a function anoonymous
3. As a arrow function


external function

this function is writtten by a vout of the event and is passed as an argument to thhe addEventlistener

Function anonymous 
this function is written inside of the event and haven't name.

Arrow function
THis function is written inside of the event, haven´t name and is consice.
* when the code that is executed more than a line has to have keys
* if the code that is executed only have a line you can omit the keys



*/
/* References */
const externa = document.getElementById("externa")
const anonima = document.getElementById("anonima")
const flecha = document.getElementById("flecha")
/* 

External Function 

*/

function functionExterna(){
  console.log("click in the external botton")
}
externa.addEventListener("click", functionExterna)

anonima.addEventListener("click", function(){
  console.log("click in the botton anonymous")
})

flecha.addEventListener("click", ()=>{
  console.log ("click in the arrow botton")
})



