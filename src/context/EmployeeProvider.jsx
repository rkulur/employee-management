import { createContext , useContext, useState } from "react";

const EmployeeContext = createContext(undefined);


export default function EmployeeProvider({children}) {
    const [employees,setEmployees] = useState(null)
  return (
    <EmployeeContext.Provider value={{employees,setEmployees}}>
        {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees(){
    return useContext(EmployeeContext)
}