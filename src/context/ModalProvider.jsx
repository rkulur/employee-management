import React, { useEffect, useState } from 'react'
import { ModalContext } from './ModalContext'

export default function ModalProvider({children}) {
    const [isConfirmed, setIsConfirmed] = useState("")

    useEffect(() => {
      console.log(isConfirmed)
    }, [isConfirmed])
    
  return (
    <ModalContext.Provider value={{isConfirmed,setIsConfirmed}}>
        {children}
    </ModalContext.Provider>
  )
}


