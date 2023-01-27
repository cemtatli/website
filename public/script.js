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
