import { IoMdCloseCircle } from "react-icons/io";

function GroceryList({ items, onToggleChecked, onDeleteItem, sortedItems }) {
  return (
    <>
      {items.length > 0 ? (
        <div className="w-full mx-auto h-[230px] overflow-y-scroll">
          <ol className="px-5 text-start">
            {sortedItems.map((item) => (
              <li
                key={item.id}
                className=" text-lg text-center flex items-center gap-x-2 py-3 border-y-[1px] border-slate-300"
              >
                <input
                  type="checkbox"
                  name="checkItem"
                  id="checkItem"
                  style={{ width: "20px", height: "30px" }}
                  onChange={() => onToggleChecked(item.id)}
                />
                <span
                  style={{
                    textDecoration: item.checked ? "line-through" : "",
                  }}
                >
                  {item.quantity} {item.name}
                </span>
                <IoMdCloseCircle onClick={() => onDeleteItem(item.id)} />
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p className="text-center mt-20 font-medium">
          Belum ada barang, <br /> tolong masukan data barang <br /> terlebih
          dahulu.
        </p>
      )}
    </>
  );
}

export default GroceryList;
