// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);

// xhr.addEventListener("load", function () {
//     console.log("load event:", xhr.response);
// });

// xhr.send();

console.log("Tasks_D8.js runs");

import * as API from "./module_D8.js";

console.log(API);

const loadBtn = document.getElementById("loadBtn");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");

loadBtn.addEventListener("click", () => {
  API.getProducts();
});

addBtn.addEventListener("click", () => {
  API.addProduct();
});

updateBtn.addEventListener("click", () => {
  API.updateProduct();
});

deleteBtn.addEventListener("click", () => {
  API.deleteProduct();
});