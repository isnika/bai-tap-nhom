export async function getRandomProduct() {
  const res = await fetch(
    "https://dummyjson.com/products/category/mens-shirts",
    {
      cache: "no-store", // để F5 luôn random lại
    }
  );

  const data = await res.json();

  const products = data.products;

  // random 1 sản phẩm
  const randomIndex = Math.floor(Math.random() * products.length);

  return products[randomIndex];
}