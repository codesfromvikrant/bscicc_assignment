import React, { useState, useEffect } from "react";
import PersonalDetails from "./PersonalDetails";
import Educational from "./Educational";
import Certification from "./Certification";
import { useSelector, useDispatch } from "react-redux";
import { setShowForm } from "../features/viewSlice";
import {
  setStudents,
  setStudentID,
  setFilteredStudentsList,
} from "../features/studentsSlice";
import { HiBackspace } from "react-icons/hi";

const Form = () => {
  const dispatch = useDispatch();
  const studentID = useSelector((state) => state.students.studentID);
  const students = useSelector((state) => state.students.students);

  const [personalData, setPersonalData] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    phonenumber: "",
    dateofbirth: "",
    city: "",
    state: "",
    country: "",
  });
  const [educationalData, setEducationalData] = useState({
    college: "",
    degree: "",
    startyear: "",
    endyear: "",
    performance_college: "",
    school: "",
    passoutyear: "",
    performance_school: "",
  });
  const [certificationData, setCertificationData] = useState([]);

  const [profileImage, setProfileImage] = useState(null);
  const [certificationImages, setCertificationImages] = useState([null]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };
  // const handleCertificationImageChange = (e) => {
  //   setCertificationImages(e.target.files[0]);
  // };

  const personalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };
  const educationalDataChange = (e) => {
    const { name, value } = e.target;
    setEducationalData({
      ...educationalData,
      [name]: value,
    });
  };
  const certificationDataChange = (value) => {
    setCertificationData([...certificationData, value]);
  };

  useEffect(() => {
    if (!studentID) return;
    const getStudentData = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:3000/students/${studentID}`
        );
        const data = await response.json();
        console.log(data);
        setProfileImage(data.profileImage);
        setPersonalData(data.personalData);
        setEducationalData(data.education);
        setCertificationData(data.certification);
      } catch (error) {
        console.log(error.message);
      }
    };
    getStudentData();
  }, [studentID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = {
      personalData,
      educationalData,
      certificationData,
    };
    const studentData = new FormData();
    studentData.append("formData", JSON.stringify(formdata));
    studentData.append("profileImage", profileImage);
    studentData.append("certificationImages", certificationImages);

    try {
      if (studentID) {
        const response = await fetch(
          `http://localhost:3000/students/${studentID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formdata, profileImage }),
          }
        );
        const jsonData = await response.json();
        const currentData = students.find(
          (student) => student._id === jsonData._id
        );
        const filteredData = students.filter(
          (student) => student._id !== jsonData._id
        );
        dispatch(setStudents([...filteredData, currentData]));
        dispatch(setFilteredStudentsList([...filteredData, currentData]));
        dispatch(setStudentID(null));
        dispatch(setShowForm(false));
        return;
      }

      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        body: studentData,
      });
      const jsonData = await response.json();
      dispatch(setStudents([...students, jsonData]));
      dispatch(setFilteredStudentsList([...students, jsonData]));
      dispatch(setStudentID(null));
      dispatch(setShowForm(false));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-transparent backdrop-blur-md w-full absolute top-0 right-0 flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
        className="bg-white shadow-xl p-6 rounded-md  max-w-4xl"
      >
        <button
          onClick={() => {
            dispatch(setStudentID(null));
            dispatch(setShowForm(false));
          }}
          className="text-sm text-white bg-blue-600 p-2 rounded mb-3 flex justify-start items-center gap-2"
        >
          <HiBackspace className="text-xl" />
          <span>Go Back</span>
        </button>
        <h3 className="text-xl font-extrabold text-slate-800 mb-3">
          Student's Personal Details
        </h3>
        <PersonalDetails
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          personalData={personalData}
          personalDataChange={personalDataChange}
          handleImageChange={handleImageChange}
        />

        <h3 className="text-xl font-extrabold text-gray-800 mt-6 mb-2">
          Educational Qualification:
        </h3>
        <Educational
          educationalData={educationalData}
          educationalDataChange={educationalDataChange}
        />

        <h3 className="text-xl font-extrabold text-gray-800 mt-6 mb-2">
          Certifications:
        </h3>
        <Certification
          certificationData={certificationData}
          certificationDataChange={certificationDataChange}
        />

        <div className="flex justify-end items-end gap-3 text-sm mt-6">
          <button
            onClick={() => {
              dispatch(setStudentID(null));
              dispatch(setShowForm(false));
            }}
            className="text-sm text-gray-800 font-semibold bg-slate-200 py-3 px-6 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-sm text-white font-semibold bg-blue-600 py-3 px-6 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
