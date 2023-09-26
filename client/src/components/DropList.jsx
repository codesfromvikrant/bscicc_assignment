import React from "react";
import { useDispatch } from "react-redux";
import { setSearchBy } from "../features/viewSlice";

const DropList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="bg-white shadow-lg p-1 rounded-md">
        <li
          onClick={() => dispatch(setSearchBy("name"))}
          className="p-2 text-slate-800 font-semibold bg-white hover:bg-slate-100 rounded-md cursor-pointer"
        >
          Name
        </li>
        <li
          onClick={() => dispatch(setSearchBy("qualification"))}
          className="p-2 text-slate-800 font-semibold bg-white hover:bg-slate-100 rounded-md cursor-pointer"
        >
          Qualification
        </li>
      </ul>
    </div>
  );
};

export default DropList;
