function changeColors() {
  const card = document.querySelector(".card");
  const title = document.querySelector(".card-title");
  const text = document.querySelector(".card-text");

  if (card.style.backgroundColor === "white") {
    card.style.backgroundColor = "black";
    title.style.color = "white";
    text.style.color = "white";
  } else {
    card.style.backgroundColor = "white";
    title.style.color = "black";
    text.style.color = "black";
  }
}
