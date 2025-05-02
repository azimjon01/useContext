import { useCallback, useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Phone", price: 1000 },
  { id: 2, name: "Planshet", price: 2000 },
  { id: 3, name: "Headphone", price: 3000 },
];

const TaskThree = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

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
            {product.name} - ${product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart Items:</h2>
      {cartItems.length === 0 && <p>No item in cart</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}
          <button
            onClick={() => removeFromCart(item.id)}
            style={{ marginLeft: 8 }}
          >
            Remove
          </button>
        </div>
      ))}
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default TaskThree;
