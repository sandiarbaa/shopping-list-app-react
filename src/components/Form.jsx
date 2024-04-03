import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // kalau input name nya false/kosong, maka langsung keluar dari function event ini
    if (!name) return;

    // membuat objek baru
    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem); // tambahkan ke list

    // console.log(newItem);
    // atur ulang nilai state ke semula
    setName("");
    setQuantity(1);
  };

  // untuk memberi value ke option untuk select (quantity)
  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} className="text-xs px-5" key={i}>
      {i + 1}
    </option>
  ));

  return (
    <form className="flex gap-x-2" onSubmit={handleSubmit}>
      <select
        name="quantity"
        id="quantity"
        className=" ps-1 bg-orange-400 rounded-md text-white hover:bg-orange-500 w-11"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {quantityNum}
      </select>

      <input
        type="text"
        name="name"
        id="name"
        className="rounded-md border border-orange-500 px-1.5 text-black outline-orange-500 w-40"
        placeholder="Tambahkan barang.."
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        type="submit"
        className="px-2 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500"
      >
        Tambah
      </button>
    </form>
  );
}

export default Form;
