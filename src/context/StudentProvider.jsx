import React, { useState } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentProvider({ children }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <StudentContext.Provider
        value={{
          id,
          setId,
          name,
          setName,
          phone,
          setPhone,
          email,
          setEmail,
          address,
          setAddress,
        }}
      >
        {children}
      </StudentContext.Provider>
    </>
  );
}
