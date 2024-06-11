---
sidebar_position: 3
---

# Product Information Editing Guide
**This guide provides detailed instructions for adding and editing product information on your website using Sellix data.:**


file location
`js/custom/products.js`

### Adding Product Data
To add or edit product data, you will need to update the specific fields in the product objects. Each product object contains fields like id, sellixProduct, name, price, image, discount, and classification.

#### Product Object Structure
Each product is represented by a JavaScript object. The structure of each product object is as follows:


```
{
    id: "product-1",             // Unique product identifier
    sellixProduct: "example_id", // Sellix product API key
    name: "Product Name",        // Name of the product
    price: "$0.00",              // Price of the product
    image: "path/to/image.png",  // Path to product image
    discount: "Discount Info",   // Discount details (optional)
    classification: "category"   // Product classification or category
}
```

### Adding a New Product
To add a new product, follow the template below. Replace the placeholders with your actual product details:

```
{
    id: "product-x",               // Replace 'x' with a unique identifier
    sellixProduct: "your_sellix_id", // Replace with the Sellix product API key
    name: "Your Product Name",     // Replace with the product's name
    price: "$your_price",          // Replace with the product's price
    image: "images/product/x.png", // Replace with the path to the product image
    discount: "Your Discount",     // Optional: Replace with discount details, if any
    classification: "your_category" // Replace with the product's category
}
 ```


### File Location
The JavaScript file where these product objects should be added or modified is located at:

`js/custom/products.js`

Adding a New Product Example
To add a new product, follow the example below. Replace the placeholder data with your actual product information:

```
{
    id: "product-10",
    sellixProduct: "unique_sellix_id",
    name: "New Product",
    price: "$29.99",
    image: "images/product/10.png",
    discount: "20% OFF",
    classification: "new-arrivals"
}
```

### Editing an Existing Product
To edit an existing product, locate the product object within the JavaScript file and update the relevant fields. For example, to update the price of "Minecraft" (product-1), modify the price field as follows:

```
{
    id: "product-1",
    sellixProduct: "638f6cbd48c3e",
    name: "Minecraft",
    price: "$12.99", // Updated price
    image: "images/product/1.png",
    discount: "20% OFF",
    classification: "account"
}
```

### Key Fields and Their Usage

id: A unique identifier for the product. Each product must have a unique id.

sellixProduct: The Sellix product API key. This key is used to link to Sellix for product management and sales.

name: The name of the product. This should be descriptive and concise.

price: The price of the product. Format this as a string with a dollar sign, e.g., "$24.99".

image: The path to the product image. Ensure that the image is placed in the correct directory and the path is accurate.

discount: Information about any discounts available for the product. This field is optional and can be left empty if there are no discounts.

classification: The category or classification of the product. This helps in organizing and displaying products on your website.

**Note**
Ensure to replace the placeholder text with actual product information to keep your product listings accurate and up to date.