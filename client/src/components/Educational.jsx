import React, { useState } from "react";
import Graduation from "./aditional-forms/Graduation";

const Educational = ({ educationalData, educationalDataChange }) => {
  return (
    <div className="flex justify-start items-start flex-col gap-1">
      <Graduation
        educationalData={educationalData}
        educationalDataChange={educationalDataChange}
      />
    </div>
  );
};

export default Educational;
