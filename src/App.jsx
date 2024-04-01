import { IoMdCloseCircle } from "react-icons/io";

const groceryItems = [
  {
    id: 1,
    name: "kopi",
    quantity: 5,
    checked: false,
  },
  {
    id: 2,
    name: "gula",
    quantity: 3,
    checked: false,
  },
  {
    id: 3,
    name: "sabun",
    quantity: 3,
    checked: false,
  },
];

function App() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-slate-200">
      <div className="w-[350px] h-[480px] bg-white border shadow rounded-lg flex flex-col justify-between">
        <div>
          <h1 className="text-center mt-5 text-2xl font-bold text-orange-400">
            Shopping List App
          </h1>

          {/* input section */}
          <div className="w-full flex justify-center items-center my-5">
            <form className="flex gap-x-2">
              <select
                name="quantity"
                id="quantity"
                className="px-2 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500"
              >
                <option value="" className="text-xs px-5">
                  1
                </option>
                <option value="" className="text-xs px-5">
                  2
                </option>
                <option value="" className="text-xs px-5">
                  3
                </option>
              </select>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-md border border-orange-500 px-1.5 text-black outline-orange-500"
                placeholder="Add Items.."
              />
              <button
                type="submit"
                className="px-2 py-1 bg-orange-400 rounded-md text-white hover:bg-orange-500"
              >
                Add
              </button>
            </form>
          </div>

          {/* list section */}
          <div className="w-full mx-auto">
            <ol className="px-5">
              {groceryItems.map((item) => (
                <li
                  key={item.id}
                  className=" text-xl text-center flex items-center gap-x-2 py-3 border-y-[1.5px]"
                >
                  <input
                    type="checkbox"
                    name="checkItem"
                    id="checkItem"
                    // className="text-2xl"
                    style={{ width: "20px", height: "30px" }}
                  />
                  {item.name}
                  <IoMdCloseCircle />
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sort */}
        <div className="my-5 w-full flex justify-center items-center gap-x-3">
          <span className="text-lg">Sort by : </span>
          <select
            name="quantity"
            id="quantity"
            className="px-2 py-1 w-40 bg-orange-400 rounded-md text-white hover:bg-orange-500"
          >
            <option value="" className="text-xs px-5">
              input order
            </option>
            <option value="" className="text-xs px-5">
              item name
            </option>
            <option value="" className="text-xs px-5">
              checklist
            </option>
          </select>
          <span className="text-lg bg-orange-400 px-2 py-1 rounded-md text-white hover:bg-orange-500">
            Clear list
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
