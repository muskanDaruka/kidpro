import React from "react";
import Image from "next/image";
import { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    const nextBtn = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
        }
    };
    const previousBtn = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    }
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <button onClick={previousBtn} className="w-[70px] bg-[#1747C8] text-white border-slate-250 border-2 h-10 rounded-l-full">
                        {/* <Image src="/images/home/left-arrow.png" width={46} height={44} alt="left" className="flex items-center justify-center  h-10 w-16 ml-0 p-2 leading-tight text-gray-500 bg-[#1747C8] border border-gray-300 rounded-l-lg hover:bg-opacity-50 hover:text-gray-700 dark:bg-opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-opacity-50 dark:hover:text-white" /> */}
                        &lt;&lt;Pre
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a
                            onClick={() => paginate(number)}
                            className={`flex items-center justify-center pb-2 px-4 h-10 ${currentPage === number
                                ? 'text-[#1747C8]'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                }`}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                <li>
                    <button onClick={nextBtn} className="w-[70px] bg-[#1747C8] text-white border-slate-250 border-2 h-10 rounded-r-full">
                        Next&gt;&gt;
                        {/* <Image src="/images/home/arrow-right1.png" alt="right" className="flex items-center justify-center px-4 h-10 w-16 p-2 leading-tight text-gray-500 bg-[#1747C8] border border-gray-300 rounded-r-lg hover:bg-opacity-50 hover:text-gray-700 dark:bg-opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-opacity-50 dark:hover:text-white" width={46} height={44} /> */}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
