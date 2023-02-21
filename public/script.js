if (localStorage.getItem("dark")) {
  document.documentElement.classList.add("dark");
}
function darkMode() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("dark", true);
  } else {
    localStorage.removeItem("dark");
  }
}

const text = document.getElementById("effect");

const initialText = "Hey, I’m Cem !";

let currentText = [];
let initialChance = 1;

let timer;
function start() {
  timer = setInterval(() => {
    initialText.split("").forEach((text) => {
      const random = Math.floor(Math.random() * initialChance + 1);
      if (random != initialChance) {
        currentText.push(text);
        return;
      }
      if (!text.match(/[^ ]/)) {
        currentText.push(text);
      } else {
        currentText.push(String.fromCharCode(Math.floor(Math.random() * 255)));
      }
    });
    const displayText = currentText.join("");
    text.innerHTML = displayText;
    currentText = [];
    if (Math.floor(Math.random() * 2) == 0) {
      initialChance++;
    }
    if (initialChance > 30) {
      clearInterval(timer);
      text.innerHTML = initialText;
    }
  }, 50);
}

start();
