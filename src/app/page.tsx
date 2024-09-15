"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/poleLibrary.png"; // Adjust the import path if necessary
import Map from "./assets/mapPic.png";
import { FiMapPin, FiImage } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { MdMail } from "react-icons/md";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [...Array(6)].map((_, index) => `صورة ${index + 1}`);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-amber-300 text-black min-h-screen flex flex-col justify-center items-center p-6 animate-fadeIn">
      {/* Logo and Title Section */}
      <section className="w-full flex flex-col justify-center items-center mb-12">
        <Image
          alt="Pole Library Logo"
          src={logo}
          width={250}
          height={250}
          className="max-w-full h-auto mb-4 drop-shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <h1 className="font-bold text-center drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          قائمة مستلزمات التلاميذ <br />
          لجميع الأطوار الابتدائية و المتوسطة
        </h1>
      </section>

      {/* Buttons Section for Menus */}
      <section className="w-full flex flex-col items-center gap-6 mb-12">
        {/* Primary School Button */}
        <Link
          href="pages/primary"
          className="relative text-xl sm:text-2xl md:text-3xl px-8 py-4 bg-white text-black w-64 sm:w-72 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-xl text-center"
        >
          <span className="font-bold">الابتدائي</span>
        </Link>

        {/* Middle School Button */}
        <Link
          href="pages/middle"
          className="relative text-xl sm:text-2xl md:text-3xl px-8 py-4 bg-white text-black w-64 sm:w-72 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-xl text-center"
        >
          <span className="font-bold">متوسط</span>
        </Link>
      </section>

      {/* Gallery Section */}
      <section className="w-full mb-12 px-4">
        <h2 className="text-center font-bold text-2xl sm:text-3xl mb-6">
          معرض الصور
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <span className="absolute inset-0 flex justify-center items-center text-black font-bold text-lg sm:text-xl md:text-2xl">
                {image}
              </span>
              <FiImage className="absolute bottom-4 right-4 text-4xl text-gray-600 opacity-80" />
            </div>
          ))}
        </div>

        {/* Full-Screen Gallery Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative max-w-3xl w-full h-auto p-6 bg-white rounded-lg shadow-lg text-right">
              <h3 className="text-2xl font-bold mb-4 text-black">
                {selectedImage}
              </h3>
              <button
                className="absolute top-4 left-4 text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
                onClick={handleCloseFullScreen}
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Location Section */}
      <section className="w-full mb-16 px-6 py-10 flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-xl">
        {/* Map Section */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg mb-6 lg:mb-0 lg:mr-8">
          <Image
            alt="صورة خريطة موقع المكتبة"
            src={Map}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-right space-y-7 rtl">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">موقعنا</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            مرحباً بكم في موقعنا حيث نقدم كل ما تحتاجونه من أدوات ومستلزمات
            تعليمية. نحن هنا لتوفير تجربة فريدة تساعدكم في تلبية جميع احتياجات
            التلاميذ الدراسية من أدوات ومواد أساسية للمدارس. يقع موقعنا في قلب
            المدينة، مما يجعله سهل الوصول.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 justify-end">
              <FiMapPin className="text-2xl flex text-red-500" />
              <span className="text-xl">العنوان: حي القطب, المسيلة</span>
            </li>
            <li className="flex items-center gap-3 justify-end">
              <a
                href="tel:+213776863561"
                className="flex items-center hover:text-green-500 transition-colors"
              >
                <BiPhone className="text-2xl text-green-500" />
                <span className="text-xl">+213 7 76 86 35 61</span>
              </a>
            </li>
            <li className="flex items-center gap-3 justify-end">
              <a
                href="mailto:polelibrary@gmail.com"
                className="flex items-center hover:text-green-500 transition-colors"
              >
                <MdMail className="text-2xl text-green-500" />
                <span className="text-xl">polelibrary@gmail.com</span>
              </a>
            </li>
          </ul>

          <div className="text-right">
            <a
              href="https://maps.app.goo.gl/UamRbzuU8hZkb2qm9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
            >
              احصل على الاتجاهات
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
