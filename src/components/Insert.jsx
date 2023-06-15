import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEmployees } from "../context/EmployeeProvider";

export default function Insert() {
	const { employees, setEmployees } = useEmployees();

	useEffect(() => {
		const employeesFromStorage = localStorage.getItem("employee");
		if (employeesFromStorage) {
			setEmployees(employeesFromStorage);
		}
	}, []);

	const navigate = useNavigate();

	function handleInsert(e) {
		e.preventDefault();

		const name = e.target.name.value;
		const phone = e.target.phone.value;
		const email = e.target.email.value;
		const address = e.target.address.value;

		let employeesToAdd;
		if (employees) {
			employeesToAdd = [...employees, { id: Date.now(), name, phone, email, address }];
			setEmployees(() => employeesToAdd);
		} else {
			employeesToAdd = [{ id: Date.now(), name, phone, email, address }];
			setEmployees(() => employeesToAdd);
		}

		localStorage.setItem("employees", JSON.stringify(employeesToAdd));

		navigate("/");
	}
	return (
		<>
			<Form title="Insert" handleSubmit={handleInsert} />
		</>
	);
}
