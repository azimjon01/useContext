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

const TaskFive = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showModalOpen, setShowModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState(0);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeToCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const editToCart = useCallback((item: Product) => {
    setShowModalOpen(true);
    setEditItem(item);
    setEditName(item.name);
    setEditPrice(item.price);
  }, []);

  const saveToCart = useCallback(() => {
    if (editItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItem.id
            ? { ...item, name: editName, price: editPrice }
            : item,
        ),
      );
      setShowModalOpen(false);
      setEditItem(null);
    }
  }, [editItem, editName, editPrice]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }, [cartItems]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <h2>Products:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <p style={{ color: "red" }}>Cart bo'sh</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price}
          </span>
          <button onClick={() => removeToCart(item.id)}>Delete</button>
          <button onClick={() => editToCart(item)}>Edit</button>
        </div>
      ))}
      <h2>Total Price: ${totalPrice}</h2>
      {showModalOpen && (
        <div>
          <div>
            <h2>Edit Item</h2>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Price:
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(Number(e.target.value))}
                />
              </label>
            </div>
            <div>
              <button onClick={() => setShowModalOpen(false)}>Cancel</button>
              <button onClick={saveToCart}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskFive;
