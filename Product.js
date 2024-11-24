// Update main image when a thumbnail is clicked
function updateImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src.replace("thumb", "large");
  }
  
  // Change quantity using +/- buttons
  function changeQuantity(amount) {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    currentValue += amount;
    if (currentValue < 1) currentValue = 1;
    quantityInput.value = currentValue;
  
    updatePrice();
  }
  
  // Add to Cart functionality
  function addToCart() {
    const productName = document.querySelector(".product-details h1").textContent;
    const price = parseFloat(document.querySelector(".price").textContent.slice(1));
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = (price * quantity).toFixed(2);
  
    const cartItem = {
      name: productName,
      price,
      size,
      quantity,
      totalPrice
    };
  
    localStorage.setItem("cart", JSON.stringify(cartItem));
  
    alert(`Added to Cart: ${quantity} x ${productName} (${size}) - $${totalPrice}`);
  }
  
  // Update total price dynamically
  function updatePrice() {
    const price = parseFloat(document.querySelector(".price").textContent.slice(1));
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = (price * quantity).toFixed(2);
  
    console.log(`Total Price: $${totalPrice}`);
  }
  