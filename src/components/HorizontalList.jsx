/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const HorizontalList = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex, "This is the activeindex");
    return (
        <div className="flex justify-center items-center text-[#1747C8] font-bold">
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 ">
                {data.map((item, index) => (
                    <li key={item} onClick={() => { setActiveIndex(index) }} className={` sm:mb-0 sm:mr-2 text-center text-xl sm:text-2xl font-sans ${index === activeIndex ? "text-[#1747C8] opacity-50 font-bold text-xl sm:text-2xl underline" : "text-xl sm:text-2xl"}`}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;