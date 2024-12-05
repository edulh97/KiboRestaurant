import { createContext, useState, useContext, ReactNode } from "react";

interface OrderContextType {
  total: number;
  updateTotal: (amount: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(() => {
    // Recuperamos el total desde localStorage, si existe
    const savedTotal = localStorage.getItem("orderTotal");
    return savedTotal ? parseFloat(savedTotal) : 0;
  });

  // Función para actualizar el total
  const updateTotal = (amount: number) => {
    // Aseguramos que el total nunca sea negativo
    const newTotal = amount < 0 ? 0 : amount;
    setTotal(newTotal);
    // Guardamos el nuevo total en el localStorage
    localStorage.setItem("orderTotal", newTotal.toString());
  };

  return (
    <OrderContext.Provider value={{ total, updateTotal }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

