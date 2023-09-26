import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/viewSlice";
import { setFilteredStudentsList } from "../features/studentsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.view.searchTerm);
  const students = useSelector((state) => state.students.students);
  const searchBy = useSelector((state) => state.view.searchBy);
  const filteredStudentsList = useSelector(
    (state) => state.students.filteredStudentsList
  );

  const handleChange = (e) => {
    const updated = students.filter((student) => {
      if (searchBy === "name") {
        const { firstname, lastname } = student.personalData;
        const fullName = `${firstname} ${lastname}`;
        return fullName.toLowerCase().includes(e.target.value.toLowerCase());
      } else {
        const { degree } = student.education;
        return degree.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });
    dispatch(setFilteredStudentsList(updated));
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search Students..."
      className="bg-slate-100 py-2 px-4 rounded-md outline-2 outline-blue-300 border-2 border-gray-200 w-full"
    />
  );
};

export default SearchBar;
