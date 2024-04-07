class Product {
    // Public properties for a Product
    constructor(brand, description, price, imageURL, starRating) {
      this.brand = brand;
      this.description = description;
      this.price = price;
      this.imageURL = imageURL;
      this.starRating = starRating;
    }
  
    // Public method to set the brand
    setBrand(brand) {
      this.brand = brand;
    }
  
    // Public method to set the description
    setDescription(description) {
      this.description = description;
    }
  
    // Public method to set the price
    setPrice(price) {
      this.price = price;
    }
  
    // Public method to set the image URL
    setImageURL(imageURL) {
      this.imageURL = imageURL;
    }
  
    // Public method to set the star rating
    setStarRating(starRating) {
      this.starRating = starRating;
    }
  
    // Public method to get the brand
    getBrand() {
      return this.brand;
    }
  
    // Public method to get the description
    getDescription() {
      return this.description;
    }
  
    // Public method to get the price
    getPrice() {
      return this.price;
    }
  
    // Public method to get the image URL
    getImageURL() {
      return this.imageURL;
    }
  
    // Public method to get the star rating
    getStarRating() {
      return this.starRating;
    }
  
    // Public method to convert the product to an HTML element
    toHTMLElement() {
      const productElement = document.createElement("div");
      productElement.className = "pro";
  
      const imgElement = document.createElement("img");
      imgElement.src = this.imageURL;
      productElement.appendChild(imgElement);
  
      const desElement = document.createElement("div");
      desElement.className = "des";
      
      const brandElement = document.createElement("span");
      brandElement.textContent = this.brand;
      desElement.appendChild(brandElement);
  
      const descElement = document.createElement("h5");
      descElement.textContent = this.description;
      desElement.appendChild(descElement);
  
      const priceElement = document.createElement("h4");
      priceElement.textContent = `$${this.price}`;
      desElement.appendChild(priceElement);
  
      productElement.appendChild(desElement);
      
      return productElement;
    }
  }
  
  // Usage example
  const product1 = new Product("Adidas", "Cartoon Astronaut T-Shirt", 78, "img/products/n1.jpg", 5);
  const productElement = product1.toHTMLElement();
  document.querySelector(".pro-container").appendChild(productElement);
  