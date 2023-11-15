const db = require("../data/database");
const mongodb = require("mongodb");

class Product {
  constructor(
    id,
    name,
    description,
    features,
    price,
    keywords,
    url,
    category,
    subcategory,
    images
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.features = features;
    this.price = price;
    this.keywords = keywords;
    this.url = url;
    this.category = category;
    this.subcategory = subcategory;
    this.images = images;
  }

  static async insertManyProducts(products) {
    const collection = await db.getDb().collection('products');

    try {
      await collection.insertMany(products);
      console.log('Products inserted successfully!');
    } catch (error) {
      console.error('Error inserting products:', error);
    }
  }
}

module.exports = Product;
