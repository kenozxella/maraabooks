const menu = document.getElementById("menuPanel");

function toggleMenu() {
  menu.classList.toggle("open");
}

// Tema
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Buka genre
function openGenre(genre) {
  if (genre === "novel") window.location.href = "books/novel.html";
  else if (genre === "pahlawan") window.location.href = "books/pahlawan.html";
  else if (genre === "sejarah") window.location.href = "books/sejarah.html";
}
