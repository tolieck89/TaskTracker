import React, { useState, useEffect } from 'react';
import { AuthContext } from './context';

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const storedAuth = localStorage.getItem('isAuth');
    return storedAuth === 'true'; 
  });

 
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
