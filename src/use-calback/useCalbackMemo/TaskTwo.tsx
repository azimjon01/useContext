import { useCallback, useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1000 },
  { id: 3, name: "Headphones", price: 2000 },
];

const TaskTwo = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
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
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </span>
        </div>
      ))}

      <h2>Cart Items:</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}

      <h2>Total price: ${totalPrice}</h2>
    </div>
  );
};

export default TaskTwo;
