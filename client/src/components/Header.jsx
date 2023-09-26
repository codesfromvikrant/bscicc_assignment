import React, { useRef, useEffect } from "react";
import Searchbar from "./SearchBar";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setShowForm, setShowDroplist } from "../features/viewSlice";
import DropList from "./DropList";

const Header = () => {
  const dispatch = useDispatch();
  const showDroplist = useSelector((state) => state.view.showDroplist);
  const searchBy = useSelector((state) => state.view.searchBy);
  const selectRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target) &&
        !selectRef.current.contains(e.target)
      ) {
        dispatch(setShowDroplist(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-start items-center gap-2 text-sm">
      <button
        onClick={() => dispatch(setShowForm(true))}
        className="text-white bg-blue-600 font-medium py-2 px-4 rounded-md w-max flex justify-start items-center gap-2"
      >
        <BsDatabaseFillAdd className="text-xl" />
        <span className="w-max">Add New Student</span>
      </button>
      <div className="w-max relative">
        <button
          ref={selectRef}
          onClick={() => dispatch(setShowDroplist(!showDroplist))}
          className="flex justify-start items-center gap-2 text-gray-800 font-semibold bg-slate-300 py-2 px-4 rounded-md"
        >
          <span className="w-max">Search By: {searchBy}</span>

          <BsFillCaretDownFill className="text-sm" />
        </button>
        <div ref={dropRef} className="absolute top-[2.5rem] w-full">
          {showDroplist && <DropList />}
        </div>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
