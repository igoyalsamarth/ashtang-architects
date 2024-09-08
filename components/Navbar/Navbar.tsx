'use client'
import { useNavbar } from "@/app/providers/NavbarProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { isNavbarOpen, setIsNavbarOpen } = useNavbar();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' }, // New link added
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className={`fixed z-100 bg-white top-0 left-0 h-full text-black transition-all duration-200 ease-in-out z-20 ${isNavbarOpen ? 'w-56' : 'w-0'}`}>
        <div className={`flex flex-col overflow-hidden duration-200 gap-4 ${isNavbarOpen ? 'p-4' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded duration-200 ${pathname === item.href ? 'bg-black text-white' : 'hover:bg-black/80 hover:text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <button
        className={`fixed top-4 left-4 w-10 h-10 rounded-full bg-black z-30 flex items-center justify-center duration-200 ${isNavbarOpen ? 'opacity-0' : 'opacity-100'}`}
        disabled={isNavbarOpen}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <Image src="/logo.png" alt="☰" width={20} height={20} className="text-white" />
      </button>
    </>
  );
}
