import React, { createContext, useState } from 'react';

export type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ModalContextProps {
  children: JSX.Element | JSX.Element[];
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: true,
  setIsModalOpen: () => {},
});

export function ModalProvider({ children }: ModalContextProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleModalState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen: isOpen, setIsModalOpen: toggleModalState }}>
      {children}
    </ModalContext.Provider>
  );
}