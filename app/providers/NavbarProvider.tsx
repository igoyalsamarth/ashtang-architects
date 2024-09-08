'use client'
import { useState, createContext, useContext, ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

interface NavbarContextType {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (isOpen: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
      <main className={`flex w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] relative text-white duration-200 ${isNavbarOpen ? 'py-4 pr-4' : ''}`}>
        <div className="flex w-full h-full">
          <Navbar />
          <div onClick={() => setIsNavbarOpen(false)} className={`relative flex w-full h-full duration-200 ease-in-out ${isNavbarOpen ? 'ml-56 sm:ml-0 rounded-xl overflow-hidden' : ''}`}>
            {children}
          </div>
        </div>
      </main>
    </NavbarContext.Provider>
  );
}
