'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <main className={`flex w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] relative text-white duration-200 ${isNavbarOpen ? 'py-4 pr-4' : ''}`}>
      <div className="flex w-full h-full">
        <div className={`fixed z-100 bg-white top-0 left-0 h-full text-black transition-all duration-200 ease-in-out z-20 ${isNavbarOpen ? 'w-64' : 'w-0'}`}>
          <div className={`flex flex-col overflow-hidden duration-200 ${isNavbarOpen ? 'p-4' : ''}`}>
            <Link href='/about' className="px-3 py-2 hover:bg-black hover:text-white rounded duration-200">About</Link>
            <Link href="/projects" className="px-3 py-2 hover:bg-black hover:text-white rounded duration-200">Projects</Link>
            <Link href="/contact" className="px-3 py-2 hover:bg-black hover:text-white rounded duration-200">Contact</Link>
          </div>
        </div>
        <button
          className={`fixed top-4 left-4 w-10 h-10 rounded-full bg-black z-30 flex items-center justify-center duration-200 ${isNavbarOpen ? 'opacity-0' : 'opacity-100'}`}
          disabled={isNavbarOpen}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <Image src="/logo.png" alt="☰" width={20} height={20} className="text-white" />
        </button>
        <div onClick={() => setIsNavbarOpen(false)} className={`relative flex w-full h-full duration-200 ease-in-out ${isNavbarOpen ? 'ml-64 sm:ml-0 rounded-xl overflow-hidden' : ''}`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          <div className="absolute flex inset-0 bg-black opacity-70"></div>
          <div className="absolute flex justify-center items-center inset-0">
            <div className="flex flex-col gap-4 w-full h-full justify-center items-center self-center place-self-center">
              <Image src="/logo.png" alt="Ashtanga Architects" width={120} height={120} className="text-white" />
              <div className="flex sm:flex-col flex-row gap-4">
                <p className="font-bankgothic text-5xl font-semibold text-center">Ashtanga</p>
                <p className="font-bankgothic text-5xl font-semibold text-center">Architects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
