import React from "react";

const Graduation = ({ educationalData, educationalDataChange }) => {
  return (
    <div className="text-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800">Graduation:</h3>
      <div className="grid grid-cols-1 gap-2 w-full mb-5">
        <span className="grid grid-cols-2 gap-2">
          <span>
            <p>College:</p>
            <input
              type="text"
              placeholder="e.g D.A.V College"
              name="college"
              value={educationalData.college}
              onChange={educationalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>

          <span>
            <p>Degree:</p>
            <input
              type="text"
              placeholder="e.g D.A.V College"
              name="degree"
              value={educationalData.degree}
              onChange={educationalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>
        </span>

        <span className="grid grid-cols-2 gap-2">
          <span>
            <p>Start year</p>
            <input
              type="text"
              placeholder="e.g 2019"
              name="startyear"
              value={educationalData.startyear}
              onChange={educationalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>
          <span>
            <p>End year</p>
            <input
              type="text"
              placeholder="e.g 2023"
              name="endyear"
              value={educationalData.endyear}
              onChange={educationalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>
        </span>

        <span>
          <p>Performance:</p>
          <input
            type="text"
            placeholder="e.g 85% or 9.2 CGPA"
            name="performance_college"
            value={educationalData.performance_college}
            onChange={educationalDataChange}
            className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
          />
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">Senior Secondary:</h3>
      <div className="grid grid-cols-1 gap-2 w-full mb-5">
        <span>
          <p>School:</p>
          <input
            type="text"
            placeholder="e.g D.A.V College"
            name="school"
            value={educationalData.school}
            onChange={educationalDataChange}
            className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
          />
        </span>

        <span>
          <p>passout year:</p>
          <input
            type="text"
            placeholder="e.g 2019"
            name="passoutyear"
            value={educationalData.passoutyear}
            onChange={educationalDataChange}
            className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
          />
        </span>

        <span>
          <p>Performance:</p>
          <input
            type="text"
            placeholder="e.g 85% or 9.2 CGPA"
            name="performance_school"
            value={educationalData.performance_school}
            onChange={educationalDataChange}
            className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
          />
        </span>
      </div>
    </div>
  );
};

export default Graduation;
