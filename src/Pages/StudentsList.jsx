import React from "react";
import StudentTable from "../Components/StudentTable/StudentTable";
import SearchBar from "../Components/SearchBar/SearchBar";

export default function StudentsList() {
  return (
    <>
      <SearchBar />
      <StudentTable />
    </>
  );
}
