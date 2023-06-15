import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function Modal({setIsDeleteClicked}) {
  const { setIsConfirmed } = useContext(ModalContext);

  return (
    <div className="w-1/4 h-52 bg-white z-10 absolute shadow-2xl rounded-lg flex flex-col justify-between p-5 text-center">
      <h2 className=" font-bold text-[1.8rem]">Delete Employee</h2>
      <p className=" ">Are you sure, You want to delete this employee?</p>
      <div className=" flex justify-end">
        <button
          className="py-2 px-6 bg-slate-300 rounded-lg mx-4 active:scale-[.98]"
          onClick={() => {
            setIsConfirmed(false);
            setIsDeleteClicked(false);
            console.log('sheesh')
          }}
        >
          No
        </button>
        <button
          className="py-2 px-6 bg-red-400 rounded-lg mx-4 active:scale-[.98]"
          onClick={() => {
            setIsConfirmed(true);
            setIsDeleteClicked(false);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
