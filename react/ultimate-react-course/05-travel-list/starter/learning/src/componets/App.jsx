import { use, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// import ".css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Check", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function HandleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function HandleDeleteItem(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  function HandlePackedItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function HandleClearList() {
    const confirmed = window.confirm(
      '"Are you sure you want to delete all items?"',
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={HandleAddItems} />
        <PackingList
          items={items}
          onDeleteItems={HandleDeleteItem}
          onPackedItem={HandlePackedItem}
          onClearList={HandleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
