import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import { ModalContext } from "../context/ModalContext";
import Modal from "./Modal";
import { useEmployees } from "../context/EmployeeProvider";

export default function Veiw() {
  const { setName, setPhone, setEmail, setAddress, setId } =
    useContext(StudentContext);

  const { isConfirmed, setIsConfirmed } = useContext(ModalContext);
  const { employees, setEmployees } = useEmployees();

  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const btnRef = useRef(null);

  useEffect(() => {
    if (isDeleted) {
      console.log("true");
      setIsDeleted(false);
    }
    if (isConfirmed) {
      setIsConfirmed(false);
      handleDelete(btnRef);
    }
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, [isDeleted, isConfirmed]);

  function handleClearInput() {
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  }

  function handleDelete(e) {
    const otherEmps = employees.filter((emp) => emp.id != e.current.id);

    localStorage.setItem("employees", JSON.stringify(otherEmps));

    setEmployees(otherEmps);
    setIsDeleted(true);
  }

  return (
    <>
      {isDeleteClicked && <Modal setIsDeleteClicked={setIsDeleteClicked} />}
      <div className={`${isDeleteClicked ? "blur-sm" : ""}`}>
        <Link
          to={"/insert"}
          onClick={handleClearInput}
          className="w-12 h-12 border"
        >
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 bg-green-200 rounded-lg active:scale-[.9]">
              Add Student
            </button>
          </div>
        </Link>
        {employees?.length > 0 ? (
          <table className="veiw">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee, index) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>
                      <Link to={`/edit/${employee.id}`}>
                        <button
                          name={index}
                          className="px-4 py-2 bg-slate-200 rounded-lg active:scale-[.9]"
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        ref={btnRef}
                        id={employee.id}
                        onClick={() => {
                          setIsDeleteClicked((prev) => !prev);
                        }}
                        className="px-4 py-2 bg-red-400 rounded-lg active:scale-[.9]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1> No data to show </h1>
        )}
      </div>
    </>
  );
}
