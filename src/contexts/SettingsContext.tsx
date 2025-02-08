"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextType {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  layoutCollapsed: boolean;
  toggleLayout: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [layoutCollapsed, setLayoutCollapsed] = useState(false);

  const toggleLayout = () => {
    setLayoutCollapsed((prev) => !prev);
    setIsHovered(false);
  };

  const value = {
    layoutCollapsed,
    isHovered,
    setIsHovered,
    toggleLayout,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
