import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";
import { StudentContext } from "../context/StudentContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEmployees } from "../context/EmployeeProvider";

export default function Edit() {
	const navigate = useNavigate();
	const { id } = useContext(StudentContext);
	const { employees, setEmployees } = useEmployees();
  const location = useLocation();

	useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('employees')));
  },[]);
  
	function handleEdit(e) {
    
    e.preventDefault();
    
		const name = e.target.name.value;
		const phone = e.target.phone.value;
		const email = e.target.email.value;
		const address = e.target.address.value;
    
    const up = employees.filter((emp)=> {
      return emp.id != location.pathname.split('/').pop()
    })
    const prev = employees.filter((emp)=> {
      return emp.id == location.pathname.split('/').pop()
    })
    console.log(prev)
    
    localStorage.setItem('employees',JSON.stringify([...up,{id : prev[0].id,name,phone,email,address}]))
    setEmployees([...up,{id : prev.id,name,phone,email,address}])

		navigate("/");
	}

	return <Form title="Edit" handleSubmit={handleEdit} />;
}
