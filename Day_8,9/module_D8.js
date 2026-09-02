const URL = "https://dummyjson.com/products";

export function getProducts() {

  const allProducts = document.getElementById("allProducts");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", URL);

  xhr.addEventListener("load", () => {

    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      const products = data.products;

      allProducts.innerHTML = "";

      products.slice(0, 6).forEach((product) => {

        const col = document.createElement("div");

        col.innerHTML = `
          <div class="card">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
          </div>
        `;

        allProducts.appendChild(col);
      });

    } else {
      console.error("Failed with status:", xhr.status);
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    allProducts.innerHTML =
      '<div class="alert alert-danger">Network error occurred.</div>';
  });

  xhr.send();

}

export function addProduct() {

  const resultContainer = document.getElementById("resultContainer");

  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${URL}/add`);

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {

    if (xhr.status >= 200 && xhr.status < 300) {

      const product = JSON.parse(xhr.responseText);

      resultContainer.innerHTML = `
        <h3>Product Added Successfully</h3>

        <p>Title: ${product.title}</p>

        <p>Price: $${product.price}</p>
      `;

    } else {

      console.error("Failed with status:", xhr.status);
      resultContainer.innerHTML =
        '<div class="alert alert-danger">Failed to add post.</div>';

    }

  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    resultContainer.innerHTML =
      '<div class="alert alert-danger">Network error.</div>';

  });

  let title = prompt("Enter product title:");
  let price = prompt("Enter product price:");
  
  const product = {
    title: title,
    price: price
  };

  xhr.send(JSON.stringify(product));

}


export function updateProduct() {

  const resultContainer = document.getElementById("resultContainer");

  const xhr = new XMLHttpRequest();

  xhr.open("PUT", `${URL}/1`);

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {

    if (xhr.status >= 200 && xhr.status < 300) {

      const product = JSON.parse(xhr.responseText);

      resultContainer.innerHTML = `
        <h3>Product Updated Successfully</h3>

        <p>Title: ${product.title}</p>

        <p>Price: $${product.price}</p>
      `;

    } else {

      console.error("Failed with status:", xhr.status);
      resultContainer.innerHTML =
        '<div class="alert alert-danger">Failed to update product.</div>';

    }

  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    resultContainer.innerHTML =
      '<div class="alert alert-danger">Network error.</div>';

  });

  let title = prompt("Enter updated product title:");
  let price = prompt("Enter updated product price:");

  const product = {
    title: title,
    price: price
  };

  xhr.send(JSON.stringify(product));

}



export function deleteProduct() {

  const resultContainer = document.getElementById("resultContainer");

  const xhr = new XMLHttpRequest();

  xhr.open("DELETE", `${URL}/1`);

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.addEventListener("load", () => {

    if (xhr.status >= 200 && xhr.status < 300) {

      const product = JSON.parse(xhr.responseText);

      resultContainer.innerHTML = `
        <h3>Product Deleted Successfully</h3>

        <p>Title: ${product.title}</p>

        <p>Price: $${product.price}</p>

        <p>ID: ${product.id}</p>
      `;

    } else {

      console.error("Failed with status:", xhr.status);
      resultContainer.innerHTML =
        '<div class="alert alert-danger">Failed to delete product.</div>';

    }

  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    resultContainer.innerHTML =
      '<div class="alert alert-danger">Network error.</div>';

  });

  xhr.send();

}