import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  userName: string | null;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string | null>('');

  const updateUserName = (name: string) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, setUserName: updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
