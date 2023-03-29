

const textArray = [  "Web Developer",  "Frontend Developer",  "HTML",  "CSS",  "ReactJS"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.querySelector(".text-three");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 30);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) {
      textIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000);
});

