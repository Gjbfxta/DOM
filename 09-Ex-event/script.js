const emojiCursor = document.querySelector(".emoji-cursor");

/* search the bvent when move the mouse */

document.addEventListener("mousemove" , (e) => {
 /*  console.log(e.clientX);
  console.log(e.clientY); */

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  emojiCursor.style.left = `${mouseX}px`;
  emojiCursor.style.top = `${mouseY}px`;
} );
console.log(emojiCursor.style);

/* change the emoji that key push */

document.addEventListener("keydown" , (e)=> {
  /* console.log(e.key); */
  switch (e.key) {
    case "1":
      emojiCursor.textContent = "😎"
      break;
    case "2":
      emojiCursor.textContent = "😥";
      break;
    case "3":
      emojiCursor.textContent = "🥰";
      break;
    case "4":
      emojiCursor.textContent = "😶";
      break;
    case "5":
      emojiCursor.textContent = "😏";
      break;

    default:
        emojiCursor.textContent = "😴"
  }

})