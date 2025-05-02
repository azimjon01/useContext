import { useCallback, useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Phone", price: 1000 },
  { id: 2, name: "Laptop", price: 2000 },
  { id: 3, name: "Headphone", price: 3000 },
];

const TaskFour = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }, []);

  const removeFormCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const editCartItem = useCallback(
    (id: number, newName: string, newPrice: number) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, name: newName, price: newPrice } : item,
        ),
      );
    },
    [],
  );

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }, [cartItems]);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - {product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart Items:</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}
          <button
            onClick={() => removeFormCart(item.id)}
            style={{ marginLeft: 8 }}
          >
            Remove
          </button>
          <button
            onClick={() =>
              editCartItem(item.id, `${item.name} (Edited)`, item.price + 100)
            }
            style={{ marginLeft: 8 }}
          >
            Edit
          </button>
        </div>
      ))}

      <h1>Total price: ${totalPrice}</h1>
    </div>
  );
};

export default TaskFour;
