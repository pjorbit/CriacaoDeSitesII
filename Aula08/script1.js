// JavaScript
const cardContainer = document.getElementById("card-container");
const fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", () => {
  fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
});
