import React, { createContext, useState } from "react";

export const StepperContext = createContext(null);

export const StepperProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    items: [
      { name: "👕 T-shirt", price: "₹599.10", category: "Clothing" },
      { name: "👖 Jeans", price: "₹1599.15", category: "Clothing" },
      { name: "👟 Sneakers", price: "₹2999.05", category: "Footwear" },
      { name: "👞 Sports shoe", price: "₹5999.30", category: "Footwear" },
      { name: "🧦 Socks", price: "₹199.99", category: "Clothing" },
      { name: "🧥 Hoodie", price: "₹2199.80", category: "Clothing" },
      { name: "🎒 Backpack", price: "₹3999.05", category: "Accessories" },
      { name: "⌚ Watch", price: "₹7999.78", category: "Accessories" },
      { name: "🧢 Hat", price: "₹499.55", category: "Accessories" },
      { name: "🧤 Gloves", price: "₹299.60", category: "Accessories" },
      { name: "🧣 Scarf", price: "₹699.07", category: "Accessories" },
    ],
    selectedItem: null,
  });

  const [finalData, setFinalData] = useState({});

  return (
    <StepperContext.Provider
      value={{ userData, setUserData, finalData, setFinalData }}
    >
      {children}
    </StepperContext.Provider>
  );
};
