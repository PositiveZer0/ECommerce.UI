import React, { createContext, type ReactNode, useContext, useState } from 'react';
import type { Product } from "../types/product";

interface CartContextType {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (index: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  
  const addItem = (item: Product) => setItems((prev) => [...prev, item]);
  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));
  const clear = () => setItems([]);
  
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
  {children}
  </CartContext.Provider>
);
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
