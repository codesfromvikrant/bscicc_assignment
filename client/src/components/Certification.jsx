import React, { useState } from "react";
import { nanoid } from "nanoid";

const Certification = ({ certificationData, certificationDataChange }) => {
  const [value, setValue] = useState({
    program: "",
    organization: "",
    issueDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const uploadCertification = (e) => {
    e.preventDefault();
    certificationDataChange(value);
    setValue({
      program: "",
      organization: "",
      issueDate: "",
      location: "",
    });
  };

  console.log(certificationData);

  const list = certificationData?.map((certification, i) => {
    return (
      <div
        className="bg-slate-100 p-3 rounded-md text-xs font-semibold"
        key={nanoid()}
      >
        <h3 className="text-gray-800 text-xl font-extrabold">
          {certification.program}
        </h3>
        <p className="text-gray-600">
          Organization: {certification.organization}
        </p>
        <p className="text-gray-600">Issue Date: {certification.issueDate}</p>
        <p className="text-gray-600">Location: {certification.location}</p>
      </div>
    );
  });

  return (
    <div className="text-sm w-full">
      <div className="grid grid-cols-1 gap-2 w-full">
        {list}
        <div className="bg-slate-200 p-3 rounded-md ">
          <div className="editor w-full mb-4 flex justify-start items-start flex-col gap-2">
            <span className="w-full">
              <p>Training program:</p>
              <input
                type="text"
                placeholder="e.g Advance React"
                name="program"
                value={value.program}
                onChange={handleChange}
                className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              />
            </span>

            <span className="w-full">
              <p>Organization:</p>
              <input
                type="text"
                placeholder="e.g Meta"
                name="organization"
                value={value.organization}
                onChange={handleChange}
                className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              />
            </span>

            <span className="grid grid-cols-2 gap-2 w-full">
              <span className="w-full">
                <p>Location:</p>
                <input
                  type="text"
                  placeholder="e.g Mumbai"
                  name="location"
                  value={value.location}
                  onChange={handleChange}
                  className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
                />
              </span>

              <span className="w-full">
                <p>Issue Date:</p>
                <input
                  type="date"
                  placeholder="e.g Mumbai"
                  name="issueDate"
                  value={value.issueDate}
                  onChange={handleChange}
                  className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
                />
              </span>
            </span>
          </div>

          <button
            onClick={uploadCertification}
            className="bg-white text-slate-800 font-medium py-2 px-4 rounded-md"
          >
            Upload Certification
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certification;
