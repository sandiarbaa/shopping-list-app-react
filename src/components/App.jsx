import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import SortingType from "./SortingType";

const groceryItems = [
  {
    id: 1,
    name: "Kopi ABC Susu",
    quantityNumber: 2,
    quantityUnit: "Saset",
    checked: false,
  },
  {
    id: 2,
    name: "Telur",
    quantityNumber: 1,
    quantityUnit: "1/2 Kg",
    checked: false,
  },
  {
    id: 3,
    name: "Susu Stroberi",
    quantityNumber: 3,
    quantityUnit: "Kotak",
    checked: false,
  },
  {
    id: 4,
    name: "Aqua",
    quantityNumber: 2,
    quantityUnit: "Box",
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = "";

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
  }

  // event untuk tambah list
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // event untuk hapus list
  const handleDeleteItem = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  };

  // event untuk mengubah check true or false
  const handleToggleChecked = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // event untuk clear list
  const handleClearItem = () => {
    setItems([]);
  };

  return (
    <main className="w-full shadow-md min-h-screen flex justify-center items-center bg-slate-200">
      <div className="w-[330px] h-[520px] bg-white border shadow rounded-lg flex flex-col justify-between">
        <div>
          <Header />

          <div className="w-full flex justify-center items-center my-5">
            <Form onAddItem={handleAddItem} />
          </div>

          <GroceryList
            items={items}
            onToggleChecked={handleToggleChecked}
            onDeleteItem={handleDeleteItem}
            sortedItems={sortedItems}
          />
        </div>

        <div className="w-full flex flex-col h-28">
          <hr className="border border-slate-300" />
          <SortingType
            onClearItem={handleClearItem}
            items={items}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <Footer items={items} />
        </div>
      </div>
    </main>
  );
}

export default App;
