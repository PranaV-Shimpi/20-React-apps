import React, { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Final = () => {
  const { userData } = useContext(StepperContext);

  // Function to calculate the total price
  const calculateTotal = () => {
    if (userData.selectedItems) {
      const total = userData.selectedItems.reduce((total, item) => total + item.price, 0);
      return total.toFixed(2); // Format total to two decimal places
    } else {
      return 0;
    }
  };

  // Function to group items by category
  const groupItemsByCategory = () => {
    const groupedItems = {};
    if (userData.selectedItems) {
      userData.selectedItems.forEach((item) => {
        if (!groupedItems[item.category]) {
          groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
      });
    }
    return groupedItems;
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Items Summary
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupItemsByCategory()).map(([category, items], index) => (
                <React.Fragment key={category}>
                  {items.map((item, itemIndex) => (
                    <tr key={item.name}>
                      {itemIndex === 0 && (
                        <td className="border px-4 py-2 font-semibold" rowSpan={items.length}>
                          {category}
                        </td>
                      )}
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">₹{item.price}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr>
                <td className="font-semibold border px-4 py-2" colSpan="2">Total</td>
                <td className="font-semibold border px-4 py-2">₹{calculateTotal()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Final;
