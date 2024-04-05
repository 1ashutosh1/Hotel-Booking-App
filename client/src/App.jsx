import { TbHotelService } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu  } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
function App() {
  return (
    <div>
      <header className="p-4 flex justify-between">
        <a href="" className="flex items-center gap-1">
          <TbHotelService className=" text-3xl" />
          <span className="font-bold text-xl">Lodgify</span>
        </a>

        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary text-white p-1 rounded-full">
            <FiSearch />
          </button>
        </div>
        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center">
          <RxHamburgerMenu  className="text-xl"/>
          <FaUserCircle className="text-xl text-gray-500"/>
        </div>
      </header>
    </div>
  );
}

export default App;
