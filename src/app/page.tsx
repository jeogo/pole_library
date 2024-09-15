"use client"; // Only needed if you're using the app directory and client components
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/poleLibrary.png"; // Adjust the import path if necessary

export default function Home() {
  return (
    <div className="bg-amber-300 min-h-screen flex flex-col justify-center items-center p-6 animate-fadeIn">
      {/* Logo and Title */}
      <div className="logo w-full flex flex-col justify-center items-center mb-10">
        <Image
          alt="Pole Library Logo"
          src={logo}
          width={300}
          height={300}
          className="max-w-full h-auto mb-6"
        />
        <h1 className="font-bold text-center text-white drop-shadow-md text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          قائمة مستلزمات التلاميذ <br />
          لجميع الأطوار الابتدائية و المتوسطة
        </h1>
      </div>

      {/* Buttons to navigate to different pages */}
      <div className="w-full flex flex-col items-center gap-6">
        {/* Primary School Button */}
        <Link
          href="pages/primary"
          className="relative text-2xl sm:text-3xl md:text-4xl px-8 py-4 bg-white text-black w-64 sm:w-72 rounded-3xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-xl text-center"
        >
          الابتدائي
        </Link>

        {/* Middle School Button */}
        <Link
          href="pages/middle"
          className="relative text-2xl sm:text-3xl md:text-4xl px-8 py-4 bg-white text-black w-64 sm:w-72 rounded-3xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-xl text-center"
        >
          متوسط
        </Link>
      </div>
    </div>
  );
}
