var store = (function () {
    var products = [
      { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
      { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
      { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
      { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
    ];

    var idCounter = 5;

    var selectedProductId = null;

    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var categoryInput = document.getElementById("category");
    var quantityInput = document.getElementById("quantity");

    var addBtn = document.getElementById("addBtn");
    var updateBtn = document.getElementById("updateBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    var searchInput = document.getElementById("search");
    var productsBody = document.getElementById("productsBody");
    var message = document.getElementById("message");
    var formTitle = document.getElementById("formTitle");


    function showMessage(text, type) {
        message.textContent = text;
        message.className = type;
        setTimeout(function () {
            message.textContent = "";
            message.className = "";
        }, 5000);
    }

    function clearForm() {
        nameInput.value = "";
        priceInput.value = "";
        categoryInput.value = "";
        quantityInput.value = "";
        selectedProductId = null;
        addBtn.disabled = false;
        updateBtn.disabled = true;
        cancelBtn.style.display = "none";
        formTitle.textContent = "Add Product";
    }


    function createProduct(name, price, category, quantity) 
    {
        var trimmedName = String(name).trim();
        var trimmedCategory = String(category).trim();

        if (trimmedName === "") {
            showMessage("You must enter a product name!", "error");
            return null;
        }

        if (trimmedCategory === "") {
            showMessage("You must enter a category!", "error");
            return null;
        }

        if (price === "" || isNaN(Number(price)) || Number(price) <= 0) 
          {
            showMessage("Price must be greater than zero!", "error");
            return null;
        }

        if (quantity === "" || isNaN(Number(quantity)) || Number(quantity) < 0) 
          {
            showMessage("Quantity cannot be negative!", "error");
            return null;
        }

        var duplicate = products.some(function (product) {
                return (product.name.toLowerCase() === trimmedName.toLowerCase());
        });

        if (duplicate) {
            showMessage("Product name already exists!", "error");
            return null;
        }

        var newProduct = {
            id: idCounter++,
            name: trimmedName,
            price: Number(price),
            category: trimmedCategory,
            quantity: Number(quantity)
        };

        products.push(newProduct);

        return newProduct;
    }


    function updateProduct(id, name, price, category, quantity) 
    {
        var product = products.find(function (product) {
                return product.id === Number(id);
        });

        if (!product) {
            showMessage("Product not found!", "error");
            return null;
        }

        var trimmedName = String(name).trim();

        var trimmedCategory = String(category).trim();

        if (trimmedName === "") {
          showMessage("Product name is required!", "error");
            return null;
        }

        var duplicate = products.some(function (item) {
                return (item.id !== Number(id) && item.name.toLowerCase() === trimmedName.toLowerCase());
        });

        if (duplicate) {
            showMessage("Product name already exists!", "error");
            return null;
        }

        if (price === "" || isNaN(Number(price)) || Number(price) <= 0) {
            showMessage("Price must be greater than zero!", "error");
            return null;
        }

        if (trimmedCategory === ""){
            showMessage("Category is required!", "error");
            return null;
        }

        if (quantity === "" || isNaN(Number(quantity)) || Number(quantity) < 0) {
            showMessage("Quantity cannot be negative!", "error");
            return null;
        }

        product.name = trimmedName;
        product.price = Number(price);
        product.category = trimmedCategory;
        product.quantity = Number(quantity);

        return product;
    }


    function deleteProduct(id) {
        var index = products.findIndex(function (product) {
                return product.id === Number(id);
        });

        if (index === -1){
            showMessage("Product not found!", "error");
            return null;
        }

        var deletedProduct = products.splice(index, 1)[0];

        return deletedProduct;
    }



    function renderProducts(list) {
        productsBody.innerHTML = "";

        if (list.length === 0) {
            productsBody.innerHTML = `
                <tr>
                    <td colspan="6">
                        No products found
                    </td>
                </tr>
            `;
            return;
        }

        list.forEach(function (product) {
            var row = document.createElement("tr");

            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="action-btn update-row" data-id="${product.id}">
                        Update
                    </button>
                    <button class="action-btn delete-row" data-id="${product.id}">
                        Delete
                    </button>
                </td>
            `;

            productsBody.appendChild(row);

        });
    }


    function filterProducts(keyword) {
        var trimmedKeyword = String(keyword).trim().toLowerCase();

        return products.filter(function (product) {
                return (product.name.toLowerCase().includes(trimmedKeyword) || product.category.toLowerCase().includes(trimmedKeyword));
            }
        );
    }


    addBtn.addEventListener("click", function () {
            var newProduct = createProduct(nameInput.value, priceInput.value, categoryInput.value, quantityInput.value);

            if (newProduct) {
                showMessage("Product added successfully!", "success");
                renderProducts(products);
                clearForm();
            }
        }
    );


    updateBtn.addEventListener("click", function () {
            if (selectedProductId === null) {
                showMessage("Please select a product to update!", "error");
                return;
            }

            var updatedProduct = updateProduct(selectedProductId, nameInput.value, priceInput.value, categoryInput.value, quantityInput.value);

            if (updatedProduct) {
              showMessage("Product updated successfully!", "success");
              renderProducts(products);
              clearForm();
            }
        }
    );


    cancelBtn.addEventListener("click", function () {
            clearForm();
        }
    );


    productsBody.addEventListener("click", function (event) {
            var id = Number(event.target.dataset.id);

            if (event.target.classList.contains("update-row")) {
                var product = products.find(function (product) {
                        return product.id === id;
                    });

                if (!product) {
                    return;
                }

                selectedProductId = product.id;
                nameInput.value = product.name;
                priceInput.value = product.price;
                categoryInput.value = product.category;
                quantityInput.value = product.quantity;


                addBtn.disabled = true;
                updateBtn.disabled = false;

                cancelBtn.style.display = "inline-block";

                formTitle.textContent = "Update Product";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            if (event.target.classList.contains("delete-row")) {

                var deletedProduct = deleteProduct(id);

                if (deletedProduct) {
                    showMessage("Product deleted successfully!", "success");
                    renderProducts(products);
                }
            }
        }
    );

    searchInput.addEventListener("input", function () {
            var keyword = searchInput.value;
            var filteredProducts = filterProducts(keyword);

            renderProducts(filteredProducts);
        }
    );

    renderProducts(products);

    return {
        createProduct: createProduct,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct,
        filterProducts: filterProducts
    };
})();