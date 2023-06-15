import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Form({ title, handleSubmit }) {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
  } = useContext(StudentContext);
  
    const location = useLocation();

    useEffect(()=>{
      if(location.pathname.split('/').length > 2){
        const employees = JSON.parse(localStorage.getItem('employees'));
        const employeeToEdit = employees.filter((emp) => emp.id == location.pathname.split('/').pop())[0]
        setName(employeeToEdit.name);
        setPhone(employeeToEdit.phone);
        setEmail(employeeToEdit.email);
        setAddress(employeeToEdit.address);
      }
    },[])

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="GET"
        className="flex flex-col justify-center items-center px-20 py-16 form shadow-2xl w-2/6 rounded-2xl bg-white"
      >
        <h1 className="font-bold text-[2rem] p-3">{title} Student</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label>Phone No.</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="btn flex ">
          <Link
            to={"/"}
            className="active:scale-[.98] bg-red-400 rounded-lg px-4 py-2  w-1/2 mx-1 text-center"
          >
            <span>Cancel</span>
          </Link>
          <button type="submit" className="active:scale-[.98] bg-slate-300">
            {title}
          </button>
        </div>
      </form>
    </>
  );
}
