// UserContext.js
import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState({})

  const addUser = (username, email, password) => {
    setRegisteredUsers((prevUsers) => ({
      ...prevUsers,
      [username]: { email, password },
    }))
  }

  return (
    <UserContext.Provider value={{ registeredUsers, addUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
