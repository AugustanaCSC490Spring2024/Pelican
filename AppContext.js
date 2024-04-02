import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Landing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('Onboarding');
      setTimeout(() => {
        setCurrentPage('Landing');
      }, 5000);
    }, 5000); // Change this to the number of milliseconds you want to wait

    return () => clearTimeout(timer);
  }, []);

  const nextPage = () => {
    switch (currentPage) {
    //   case 'Landing':
    //     setCurrentPage('Onboarding');
    //     break;
      case 'Onboarding':
        // setCurrentPage('Auth');
        break;
      default:
        //oprimize later: recognize if it's current user or new user to skip onboarding
        setCurrentPage('Landing'); 
    }
  };

  return (
    <AppContext.Provider value={{ currentPage, nextPage }}>
      {children}
    </AppContext.Provider>
  );
};