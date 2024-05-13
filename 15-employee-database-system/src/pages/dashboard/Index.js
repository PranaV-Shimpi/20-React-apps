import React, { useState } from "react";
import Swal from "sweetalert2-react-content";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

import { employeesData } from "../../Data/index";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    //
  };
  const handleDelete = () => {
    //
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          setSelectedEmployee={setSelectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
