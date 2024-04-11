import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Details = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    let selectedItems = userData.selectedItems || [];
    const [itemName, itemPrice, itemCategory] = value.split(" - ");
    if (checked) {
      selectedItems.push({
        name: itemName,
        price: parseFloat(itemPrice.replace("₹", "")), // Extract price without ₹
        category: itemCategory,
      });
    } else {
      selectedItems = selectedItems.filter(
        (item) => item.name !== itemName
      );
    }
    setUserData((prevData) => ({ ...prevData, [name]: selectedItems }));
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Choose Items
        </div>
        <div className="bg-white my-2 p-4 border border-gray-200 rounded">
          {userData.items &&
            Object.entries(
              userData.items.reduce((acc, item) => {
                acc[item.category] = acc[item.category] || [];
                acc[item.category].push(item);
                return acc;
              }, {})
            ).map(([category, items]) => (
              <div key={category}>
                <div className="font-bold mt-2">{category}</div>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item.name}
                        name="selectedItems"
                        value={`${item.name} - ${item.price} - ${item.category}`}
                        checked={(userData.selectedItems || []).some(
                          (selectedItem) => selectedItem.name === item.name
                        )}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor={item.name}>{`${item.name} - ${item.price}`}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        {userData.selectedItems && userData.selectedItems.length === 0 && (
          <p className="text-red-500 text-xs">Please select at least one item.</p>
        )}
      </div>
    </div>
  );
};

export default Details;
