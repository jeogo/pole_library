// app/middle/page.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import logo from "@/app/assets/poleLibrary.png";
import { educationData, YearData } from "@/app/data/data";

export default function Middle() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleYearClick = (year: number): void => {
    setSelectedYear(year);
    setCheckedItems({}); // Reset checked items when selecting a new year
  };

  const handleBackToSelection = (): void => {
    setSelectedYear(null);
  };

  const handleCheckboxChange = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const yearLabels = ["الأولى", "الثانية", "الثالثة", "الرابعة"];

  // Get the data for the selected year from the middle school data
  const selectedYearData: YearData | undefined = selectedYear
    ? educationData.middle[`year${selectedYear}`]
    : undefined;

  return (
    <div className="bg-amber-300 min-h-screen p-4 animate-fadeIn">
      {/* Header */}
      <header className="flex flex-col items-center mb-8 rtl">
        <div className="flex items-center justify-between w-full">
          {/* Back arrow on the left */}
          <Link href="/">
            <span className="text-black text-3xl hover:text-gray-700 cursor-pointer">
              <FiArrowLeft size={36} />
            </span>
          </Link>
          {/* Logo in the middle */}
          <Image
            alt="Pole Library Logo"
            src={logo}
            width={100}
            height={100}
            className="w-24 h-24 sm:w-32 sm:h-32"
          />
          {/* Spacer on the right */}
          <div className="w-9"></div> {/* To balance the back arrow */}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-4">
          سنوات المتوسطة
        </h1>
      </header>

      {/* Main Content */}
      {selectedYear && selectedYearData ? (
        // If a year is selected, display the content
        <section className="text-center rtl">
          <h2 className="text-3xl font-semibold mb-4">
            السنة {yearLabels[selectedYear - 1]}
          </h2>
          <p className="text-2xl mb-6">
            قائمة المستلزمات للسنة {yearLabels[selectedYear - 1]}
          </p>

          {/* Display the data for the selected year */}
          <div className="text-right mx-auto max-w-2xl bg-white text-black p-6 rounded-lg shadow-lg">
            {/* Notebooks */}
            <h3 className="text-2xl font-semibold mb-4">الدفاتر:</h3>
            <ul className="mb-6 list-none text-right">
              {selectedYearData.notebooks.map((notebook, index) => {
                const itemKey = `notebook-${index}`;
                return (
                  <li
                    key={itemKey}
                    className={`flex items-center justify-end mb-2 ${
                      checkedItems[itemKey] ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {notebook.name}: عدد {notebook.quantity}, صفحات{" "}
                    {notebook.pages}
                    <input
                      type="checkbox"
                      className="ml-2 scale-125" // Checkbox on the left in RTL
                      checked={checkedItems[itemKey] || false}
                      onChange={() => handleCheckboxChange(itemKey)}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Writing Tools */}
            <h3 className="text-2xl font-semibold mb-4">أدوات الكتابة:</h3>
            <ul className="mb-6 list-none text-right">
              {selectedYearData.writing_tools.map((item, index) => {
                const itemKey = `writing-tool-${index}`;
                return (
                  <li
                    key={itemKey}
                    className={`flex items-center justify-end mb-2 ${
                      checkedItems[itemKey] ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item}
                    <input
                      type="checkbox"
                      className="ml-2 scale-125" // Checkbox on the left in RTL
                      checked={checkedItems[itemKey] || false}
                      onChange={() => handleCheckboxChange(itemKey)}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Geometry Tools */}
            <h3 className="text-2xl font-semibold mb-4">أدوات الهندسة:</h3>
            <ul className="mb-6 list-none text-right">
              {selectedYearData.geometry_tools.map((item, index) => {
                const itemKey = `geometry-tool-${index}`;
                return (
                  <li
                    key={itemKey}
                    className={`flex items-center justify-end mb-2 ${
                      checkedItems[itemKey] ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item}
                    <input
                      type="checkbox"
                      className="ml-2 scale-125" // Checkbox on the left in RTL
                      checked={checkedItems[itemKey] || false}
                      onChange={() => handleCheckboxChange(itemKey)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            onClick={handleBackToSelection}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-200 mt-6"
          >
            العودة لاختيار السنة
          </button>
        </section>
      ) : (
        // If no year is selected, display the year selection buttons
        <section className="text-center mb-8 rtl">
          <p className="text-2xl font-semibold">اختر سنة من السنوات</p>
          {/* Additional Text */}
          <p className="text-lg mt-2">
            يمكنك اختيار السنة الدراسية للاطلاع على التفاصيل والمواد المطلوبة
            لكل سنة.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 rtl">
            {yearLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => handleYearClick(index + 1)}
                className="bg-white text-black py-4 px-8 rounded-xl text-2xl shadow-md hover:bg-gray-100 transition duration-200 w-64"
              >
                السنة {label}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
