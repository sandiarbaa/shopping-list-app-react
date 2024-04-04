import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  // const [quantityN, setQuantityN] = useState(1);
  // const [quantityU, setQuantityU] = useState("");
  const [quantityNumber, setQuantityNumber] = useState(1);
  const [quantityUnit, setQuantityUnit] = useState("1/4 L");

  const handleSubmit = (e) => {
    e.preventDefault();

    // kalau input name nya false/kosong, maka langsung keluar dari function event ini
    if (!name) return;

    const newItem = {
      name,
      quantityNumber,
      quantityUnit,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem); // tambahkan ke list

    // atur ulang nilai state ke semula
    setName("");
    setQuantityNumber(1);
    setQuantityUnit("");
  };

  // untuk memberi value ke option untuk select (quantity)
  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} className="text-xs px-5" key={i}>
      {i + 1}
    </option>
  ));

  const quantityUnits = [
    "1/4 L",
    "1/2 L",
    "L",
    "1/4 Kg",
    "1/2 Kg",
    "Kg",
    "Saset",
    "Bungkus",
    "Buah",
    "Ikat",
    "Lusin",
    "Box",
    "Kotak",
    "Pak",
    "Botol",
    "Kaleng",
    "Set",
    "Toples",
    "Karung",
    "Tabung",
  ].map((unit, i) => (
    <option value={unit} key={i}>
      {unit}
    </option>
  ));

  return (
    <form className="flex gap-x-2 flex-col" onSubmit={handleSubmit}>
      <div className="flex gap-x-3 mb-2 text-sm">
        <select
          name="quantityNumber"
          id="quantityNumber"
          className=" ps-1 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500 w-11"
          value={quantityNumber}
          onChange={(e) => setQuantityNumber(Number(e.target.value))}
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
        <select
          name="quantityUnit"
          id="quantityUnit"
          className=" ps-1 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500 w-20"
          value={quantityUnit}
          onChange={(e) => setQuantityUnit(e.target.value)}
        >
          {quantityUnits}
        </select>
      </div>

      <button
        name="submit-btn"
        id="submit-btn"
        type="submit"
        className="px-2 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500 font-semibold"
      >
        Tambah
      </button>
    </form>
  );
}

export default Form;
