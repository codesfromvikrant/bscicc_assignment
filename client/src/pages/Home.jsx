import React, { useState } from "react";
import Header from "../components/Header";
import StudentsList from "../components/StudentsList";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";

const Home = () => {
  const showForm = useSelector((state) => state.view.showForm);
  const students = useSelector((state) => state.students.students);

  return (
    <main className="relative">
      <div className="max-w-4xl mx-auto bg-white my-10 p-4 rounded-md">
        <Header />
        <StudentsList />
        <Pagination totalComp={students?.length} notesPerPage={8} />
      </div>
      {showForm && <Form />}
    </main>
  );
};

export default Home;
