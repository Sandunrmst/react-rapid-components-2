import React, { useEffect, useState } from "react";

const FilterProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products); //everytime page load this will store all products not filter products
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cpyProducts = [...products];
    setFilteredItems(
      currentSelectedCategory !== ""
        ? cpyProducts.filter(
            (productItem) =>
              productItem.category.toLowerCase() ===
              currentSelectedCategory.toLowerCase()
          )
        : cpyProducts
    );
  }, [currentSelectedCategory]);

  //create unique categories from all products
  const uniquCategories =
    products && products && products.length > 0
      ? [...new Set(products.map((productsItems) => productsItems.category))]
      : [];

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-orange-700 ">
        Filter Products by Category
      </h1>

      {uniquCategories.map((item) => (
        <button
          onClick={() => setCurrentSelectedCategory(item)}
          className="bg-green-600 mr-2 mb-5 px-4 py-2 rounded-lg text-lg"
          key={item}
        >
          {item}
        </button>
      ))}
      <ul className="flex flex-wrap gap-6 justify-center">
        {filteredItems && filteredItems.length > 0
          ? filteredItems.map((productItem) => (
              <li
                className="bg-orange-200 px-5 py-5 rounded-2xl"
                key={productItem.id}
              >
                <p className="text-2xl mb-4">{productItem.title}</p>
                <button className="bg-orange-400 px-4 py-2 rounded-lg text-lg">
                  {productItem.category}
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default FilterProducts;
