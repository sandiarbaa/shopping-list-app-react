function SortingType({ onClearItem, sortBy, setSortBy }) {
  return (
    <>
      <div className="my-5 w-full flex justify-center items-center gap-x-3">
        <span className="font-medium">Urutkan : </span>
        <select
          className="px-2 py-1 w-40 bg-orange-400 rounded-md text-white hover:bg-orange-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input" className="text-xs px-5">
            sesuai input
          </option>
          <option value="name" className="text-xs px-5">
            sesuai nama
          </option>
          <option value="checked" className="text-xs px-5">
            sesuai ceklis
          </option>
        </select>
        <button
          type="button"
          className="bg-orange-400 px-2 py-1 rounded-md text-white hover:bg-orange-500"
          onClick={onClearItem}
        >
          Bersihkan
        </button>
      </div>
    </>
  );
}

export default SortingType;
