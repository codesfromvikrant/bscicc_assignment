import React, { useState, useEffect } from "react";
import ProfileImage from "../assets/profile_image.png";
import { useSelector, useDispatch } from "react-redux";
import {
  setStudents,
  setStudentID,
  setFilteredStudentsList,
} from "../features/studentsSlice";
import { setShowForm } from "../features/viewSlice";
import { setProfileImages } from "../features/studentsSlice";
import { useSearchParams } from "react-router-dom";

const StudentsList = () => {
  const dispatch = useDispatch();
  const profileImages = useSelector((state) => state.students.profileImages);
  const students = useSelector((state) => state.students.students);
  const filteredStudentsList = useSelector(
    (state) => state.students.filteredStudentsList
  );
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students");
        const jsonData = await response.json();
        dispatch(setStudents(jsonData));
        dispatch(setFilteredStudentsList(jsonData));
      } catch (error) {
        console.error(error.message);
      }
    };
    getStudents();

    const getImages = async () => {
      try {
        const response = await fetch("http://localhost:3000/profileImages");
        const jsonData = await response.json();
        console.log(jsonData);
        dispatch(setProfileImages(jsonData));
      } catch (error) {
        console.error(error.message);
      }
    };
    getImages();
  }, []);

  const deleteStudent = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });
      const deletedData = await response.json();
      const updatedData = students.filter(
        (student) => student._id !== deletedData._id
      );
      dispatch(setStudents(updatedData));
    } catch (error) {
      console.error(error.message);
    }
  };

  const list = filteredStudentsList?.map((student, i) => {
    let start = (page - 1) * 8;
    let end = page * 8;
    if (filteredStudentsList && end > filteredStudentsList.length)
      end = students.length;
    if (i < start || i >= end) return null;

    const { personalData } = student;
    const date = new Date(personalData.dateofbirth);
    const style = {
      backgroundImage: `url(${
        student.profileImage
          ? `http://localhost:3000/uploads/profileImages/${student.profileImage}`
          : ProfileImage
      })`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div
        key={student._id}
        className="flex justify-start items-center gap-6 bg-slate-100 p-2 rounded-md"
      >
        <div className="bg-white p-1 rounded-full ">
          <div style={style} className="rounded-full w-28 h-28"></div>
        </div>
        <div className="flex justify-start items-start flex-col text-sm rounded-md">
          <span>
            <span className="font-semibold">Name: </span>{" "}
            {personalData.firstname} {personalData.lastname}
          </span>

          <span className="flex justify-start items-center gap-2">
            <span>
              <span className="font-semibold">Email ID:</span>{" "}
              {personalData.emailid}
            </span>
            <span>
              <span className="font-semibold">Phone Number:</span>{" "}
              {personalData.phonenumber}
            </span>
            <span>
              <span className="font-semibold"> Date of Birth: </span>
              {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/
              {date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1}
              /{date.getFullYear()}
            </span>
          </span>

          <span className="flex justify-start items-center gap-2">
            <span>
              <span className="font-semibold">City:</span> {personalData.city}
            </span>
            <span>
              <span className="font-semibold">State:</span> {personalData.state}
            </span>
            <span>
              <span className="font-semibold"> Country: </span>
              {personalData.country}
            </span>
          </span>

          <div className="flex justify-start items-center gap-2 text-xs mt-2">
            <button
              onClick={() => {
                dispatch(setStudentID(student._id));
                dispatch(setShowForm(true));
              }}
              className="text-white font-medium bg-blue-600 px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteStudent(student._id);
              }}
              className="text-gray-800 font-medium bg-slate-300 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="grid grid-cols-1 gap-4 my-5">{list}</div>;
};

export default StudentsList;
