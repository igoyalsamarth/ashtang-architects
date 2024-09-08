'use client'
import Image from "next/image";

export default function Home() {
  return (
    <>
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
    </>
  );
}
