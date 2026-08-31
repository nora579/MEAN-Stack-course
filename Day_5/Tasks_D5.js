var store = (function () {
var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var idCounter = 5;

return {
 createProduct: function(name, price, category, quantity) {
    if (String(name).trim() !== ""){
        var trimmedName = String(name).trim();
    } else {
        alert("You must enter name for the product!!")
        return;
    }
    var trimmedCategory = String(category).trim();

    if (Number(price) <= 0){
        alert("Enter valid price greater than zero!!");
        return;
    }
    if (Number(quantity) < 0){
        alert("Enter valid quantity not a negative number!!");
        return;
    }

    var duplicate = products.some(function(product) {
        return product.name.trim().toLowerCase() === trimmedName.toLowerCase();
    });

    if (duplicate) {
        alert("Product name already exists!");
        return;
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
},

addMany: function(...items) {
      var addedProducts = [];
      var self = this;
      items.forEach(function(item) {
        var newProd = self.createProduct(item.name, item.price, item.category, item.quantity);
        if (newProd) {
          addedProducts.push(newProd);
        }
      });
      return addedProducts;
},

getAllProducts: function(list) {
    return this.printProducts(list || products); 
},

printProducts: function(list) {
    if (list.length === 0 || !list) {
        alert("No products found!");
        return;
    }
    console.table(list);
},

getProductById: function(id) {
    var product = products.find(function(product){
        return product.id === Number(id)
    });
    return product || null;
},

updateProduct: function(id, name, price, category, quantity) {
    if (id == null || id.trim() == "" || isNaN(Number(id))){
        return alert("Enter Valid ID!")
    }

    var product = products.find(function(product){
        return product.id === Number(id);
    });

    if (!product) {
        alert("Product not found!");
        return;
    }
    if (name !== null && String(name).trim() !== "") {
        var trimmedName = String(name).trim();
        var duplicate = products.some(function(product) {
          return (product.id !== Number(id) && product.name.trim().toLowerCase() === trimmedName.toLowerCase());
        });
        if (duplicate) {
          alert("Product name already exists!");
          return;
        }
        product.name = trimmedName;
    }
    if (price !== null && String(price).trim() !== "" && !isNaN(Number(price))) {
        product.price = Number(price);
    }
    if (category !== null && String(category).trim() !== "") {
        product.category = String(category).trim();
    }
    if (quantity !== null && String(quantity).trim() !== "" && !isNaN(Number(quantity))) {
        product.quantity = Number(quantity);
    }

    return product;
},

deleteProduct: function(id) {
    if (id == null || id.trim() == "" || isNaN(Number(id))){
        return alert("Enter Valid ID!")
    }

    var index = products.findIndex(function(product){
        return product.id === Number(id);
    });

    if (index === -1) {
        return alert("Product not found!");
    }
    var Confirmed = confirm(`Are you sure you want to delete product ID ${id}?`);
    if (Confirmed) {
        var deletedProduct = products.splice(index, 1)[0];
        return deletedProduct;
    } else{
        return "Deletion canceled!";
    }
},

filterProducts: function(keyword) {
    if (keyword === null || String(keyword).trim() === "") {
        return [];
    }

    var trimmedKeyword = String(keyword).trim().toLowerCase();
    var foundProducts = products.filter(function(product){
        if (product.name.toLowerCase().includes(trimmedKeyword)){
            return product;
        } else if(product.category.toLowerCase().includes(trimmedKeyword)){
            return product;
        }
    });
    return foundProducts;
},

startApp: function() {
    var run = true;
    var self = this;

    while (run) {
        var choice = prompt(
        "===== NTI Mini Store =====\n" +
        "1) Add product\n" +
        "2) Show all products\n" +
        "3) Show product by ID\n" +
        "4) Update product\n" +
        "5) Delete product\n" +
        "6) Search / Filter\n" +
        "0) Exit\n\n" +
        "Enter option number:"
        );

        if (choice === null || choice.trim() === "0") {
            alert("Cancel application!");
            run = false;
            break;
        }

        switch (choice.trim()) {
            case "1": {
                var name = prompt("Enter product name:");
                var price = prompt("Enter price:");
                var category = prompt("Enter category:");
                var quantity = prompt("Enter quantity:");
                var result = self.createProduct(name, price, category, quantity);
                if (result) {
                    alert("Product created successfully!");
                    console.log(result);
                }                
                break;
            }
            case "2":
                self.getAllProducts(products);
                break;

            case "3": {
                var id = prompt("Enter Product ID:");
                var product = self.getProductById(id);
                if (product) {
                    console.table([product]);
                } else {
                    alert("Product not found!");
                }
                break;
            }
            case "4": {
                var id = prompt("Enter Product ID to update:");
                var name = prompt("Enter new name (leave empty to keep current):");
                var price = prompt("Enter new price (leave empty to keep current):");
                var category = prompt("Enter new category (leave empty to keep current):");
                var quantity = prompt("Enter new quantity (leave empty to keep current):");
                var result2 = self.updateProduct(id, name, price, category, quantity);
                if (result2) {
                    alert("Product updated successfully!");
                    console.log(result2);
                }
                break;
            }
            case "5": {
                var id = prompt("Enter Product ID to delete:");
                var deleteResult = self.deleteProduct(id);
                if (deleteResult) {
                    alert(typeof deleteResult === "string" ? deleteResult : "Product deleted successfully!");
                    console.log(deleteResult);
                }
                break;
            }
            case "6": {
                var keyword = prompt("Enter search keyword:");
                var foundProducts = self.filterProducts(keyword);
                self.getAllProducts(foundProducts);
                break;
            }
            default:
                alert("Invalid option! Please enter a number from 0 to 6!");
        }
    }
}
};
})();

store.startApp();