/* 

Object Event 

the object event is a event tha ocurre when the navegator, like a click, push a key or the movimientio and mouse and proporciona information in side the controller's proprietes and methods for 

For access at the obhect event it pasa automaticamnete as a argumet the fuction 

type: comeback the event type
traget: comeback the element when occursthe event
client x: comeback the position of mouse in direction to the window of navegator
client x: comeback the position vertical of mouse in direction to the window of navegator



*/

const button = document.getElementsByClassName("button");

console.log(button[0]);


button[0].addEventListener("click", mostrarObjetoEvento)
function mostrarObjetoEvento(event){
  console.log(event)
  console.log(event.type)
  console.log(event.timeStamp)
  console.log(event.target)
}

document.addEventListener("keydown", function(e){
  console.log(e);
  console.log(e.code);
  console.log(e.type);
  console.log(e.key);
})

document.addEventListener("mousemove", (e) => {
  console.log(e);
  console.log("Cord X:" + e.clientX+ "Cord Y:" + e.clientY);
}
  )
