export async function getClothes() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}
