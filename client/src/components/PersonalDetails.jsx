import React, { useEffect } from "react";
import NoProfile from "../assets/profile_image.png";

const PersonalDetails = ({
  profileImage,
  setProfileImage,
  personalData,
  personalDataChange,
  handleImageChange,
}) => {
  return (
    <div className="flex justify-start items-start gap-4 text-sm">
      <div className="flex justify-center items-center gap-2 flex-col w-max">
        <img
          src={
            profileImage
              ? `http://localhost:3000/uploads/profileImages/${profileImage}`
              : NoProfile
          }
          alt="students-profile-image"
          className="w-44"
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="custom-file-input w-full text-xs"
        />
      </div>
      <div className="grid grid-cols-1 gap-2 w-full">
        <div className="grid grid-cols-2 gap-2 w-full">
          <span>
            <p>First Name:</p>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={personalData.firstname}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />{" "}
          </span>
          <span>
            <p>Last Name:</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={personalData.lastname}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />{" "}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <span>
            <p>Email ID:</p>
            <input
              type="email"
              placeholder="Email"
              name="emailid"
              value={personalData.emailid}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />
          </span>
          <span>
            <p>Phone Number:</p>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phonenumber"
              value={personalData.phonenumber}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />
          </span>
          <span>
            <p>Date of Birth</p>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateofbirth"
              value={personalData.dateofbirth}
              onChange={personalDataChange}
              required
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <span>
            <p>City:</p>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={personalData.city}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />
          </span>
          <span>
            <p>State:</p>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={personalData.state}
              onChange={personalDataChange}
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
              required
            />
          </span>
          <span>
            <p>Country:</p>
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={personalData.country}
              onChange={personalDataChange}
              required
              className="bg-gray-100 py-3 px-4 rounded-md outline-2 outline-blue-300  w-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
