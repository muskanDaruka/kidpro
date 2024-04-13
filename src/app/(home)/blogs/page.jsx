/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "../../../components/Footer";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../../components/Pagination";
// import FAQ from "@/components/FAQ";
import { useAllBlogs } from "../../../hooks/blogs.hooks";
import BlogUserCards from "../../../components/BlogUserCard";

const categories = [
    { size: 'w-40', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-50', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-50', text: 'Category' },
    { size: 'w-40', text: 'Category' },
    { size: 'w-40', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-50', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-50', text: 'Category' },
    { size: 'w-40', text: 'Category' },
    { size: 'w-40', text: 'Category' },
    { size: 'w-30', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-40', text: 'Category' },
    { size: 'w-60', text: 'Category' },
    { size: 'w-50', text: 'Category' },
];
const trendingCards = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "March 20, 2024",
        category: "Category"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "March 20, 2024",
        category: "Category"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "March 20, 2024",
        category: "Category"
    }
]
const faqDataHome = [
    { question: 'What is childcare management software, and why do childcare centers need it?', answer: 'Childcare management software is a comprehensive tool designed to streamline operations in childcare centers. It aids in managing attendance, child care billing, communication, and more, improving overall efficiency.' },
    { question: 'How does childcare management software help in parent communication?', answer: 'Childcare management software facilitates real-time communication between parents and caregivers. Parents can receive updates, photos, and important announcements, fostering a transparent and collaborative environment.' },
    { question: 'What features should I look for when choosing childcare management software?', answer: 'Look for features like attendance tracking, childcare billing and communication tools, lesson planning, and comprehensive reporting. The software should align with the specific needs of your childcare center.' },
    { question: 'Is childcare management software secure and compliant with regulations?', answer: 'Yes, reputable childcare management software prioritizes security and compliance. Ensure the software follows industry standards, like GDPR and HIPAA, to protect sensitive information and maintain legal compliance.' },
    { question: 'Can childcare management software help with staff management and payroll?', answer: 'Absolutely. The software often includes modules for staff scheduling, attendance tracking, and payroll management, streamlining administrative tasks and ensuring accurate payroll processing.' },
];

const Blogs = () => {
    const { data: blogData, isLoading } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = (currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage) - 1
    const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);
    const [showFullSummary, setShowFullSummary] = useState(false);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div>
            <section className="relative">
                <div>
                    <Image
                        src="/images/home/banner-bg.jpg"
                        alt="blog_banner"
                        className="relative w-full object-cover h-[600px]"
                        width={1440}
                        height={827}
                    />
                    <div className="bg-[url('/images/home/bg.png')] bg-cover bg-repeat absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                        <h2 className="text-white text-5xl font-bold font-sans">Our Blogs</h2>
                        <h3 className="text-white text-2xl font-normal font-sans text-center">

                            Lorem ipsum dolor sit amet, consectetur (Blog title)
                            Lorem ipsum dolor sit amet, consectetur (Blog title)

                        </h3>
                    </div>
                </div>
            </section>
            <section className="relative bg-white">
                <div className="sm:flex-1">
                    <div className="sm:flex">
                        <div className="items-center space-y-1 m-5">
                            <div>
                                <Link href={`/blogs/${blogs[0]?._id}`}>
                                    {blogs[0] && (
                                        <div className="mt-5 border-slate-25 border-2 rounded-lg w-full mx-auto md:ml-0 md:mr-0">
                                            <div className="flex flex-col md:flex-row mx-auto">
                                                <div className="w-full">
                                                    <Image
                                                        src={blogs[0]?.blogImgUrl}
                                                        alt="image"
                                                        className="h-[272.037px] md:h-[271.037] md:w-full w-full rounded-lg object-fit"
                                                        width={330} height={270}
                                                    />
                                                </div>
                                                <div className="md:flex-grow h-[272.037px] md:h-auto">
                                                    <h1 className="font-bold font-sans text-xl mt-2 md:mt-5 ml-5">
                                                        {blogs[0]?.name}
                                                    </h1>
                                                    <div>
                                                        <p className="text-[#475467] text-sm mt-2 ml-5 md:ml-5 font-sans" style={{ maxHeight: showFullSummary ? "none" : "3em", overflow: "hidden" }}>
                                                            {blogs[0]?.summary}
                                                        </p>
                                                        {blogs[0]?.summary.length > 150 && (
                                                            <button
                                                                className="text-[#1747C8] transition duration-300 hover:underline mt-2 ml-5 md:ml-5 font-sans"
                                                                onClick={() => setShowFullSummary(!showFullSummary)}
                                                            >
                                                                Read More &gt;&gt;
                                                            </button>
                                                        )}
                                                        {/* <Link
                                                            href={`/blogs/${blogs[0]?._id}`}
                                                            id="readMoreLink"
                                                            className="text-[#1747C8] transition duration-300 hover:underline mt-2 ml-2 md:ml-5 font-sans"
                                                        >
                                                            Read More&gt;&gt;
                                                        </Link> */}
                                                    </div>
                                                    <div className="flex md:flex-row items-start justify-between pr-2">
                                                        <span className="text-black font-bold mt-5 ml-5 font-sans">
                                                            {currentDate}
                                                        </span>
                                                        <span className="font-bold font-sans mt-5 ml-2 md:mr-5 mr-2">
                                                            {blogs[0]?.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Link>
                                {
                                    Array.isArray(blogs) && blogs.length > 0 && (
                                        <div className="w-full sm:max-w-screen-lg mx-auto px-5 sm:px-10 py-5 sm:py-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {currentItems.slice(1).map((blog, index) => (
                                                    <div key={index} className="mb-4">
                                                        <Link href={`/blogs/${blog._id}`}>
                                                            <BlogUserCards key={blog.id} blog={blog} useInImg useInName useInSummary useInRead useInDate useInCategory />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }

                                <div className=" flex justify-center m-[50px]">
                                    {/* <button className="w-[70px] font-sans text-black border-slate-250 border-2">
                                        &lt;&lt;Pre
                                    </button>
                                    <button className="w-[70px] font-sans text-black border-slate-250 border-2">
                                        Page 1
                                    </button>
                                    <button className="w-[70px] font-sans text-[#1747C8] border-slate-250 border-2">
                                        Next&gt;&gt;
                                    </button> */}
                                    <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalItems={blogs.length}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[455px] md:border-l border-gray-400 sm:p-10">
                            <h1 className="font-bold text-2xl ml-2 mt-6 font-sans">Trending Blogs</h1>
                            <hr />
                            <div className="mt-6">
                                {trendingCards.map((item, index) => (
                                    <div key={index} className="mt-5 m-5">
                                        <h1 className="font-bold font-sans text-xl">{item.title}</h1>
                                        <p className="font-normal font-sans mt-2">{item.description}</p>
                                        <a href="#" id="readMoreLink" className="text-[#1747C8] transition duration-300 hover:underline font-sans">
                                            Read More&gt;&gt;
                                        </a>
                                        <div className="flex mb-5">
                                            <span className="text-black font-bold mt-5 font-sans">{item.date}</span>
                                            <span className="font-bold mt-5 md:ml-[100px] ml-40 font-sans">{item.category}</span>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            <h2 className="font-bold text-2xl ml-5 mt-6 font-sans">Categories</h2>
                            <div className="flex flex-wrap ml-5 mt-6">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg font-sans`}
                                    >
                                        {category.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="relative">
                <div className="relative">
                    <Image
                        src="/images/home/GetaDemo.png"
                        alt="banner"
                        className="relative w-screen object-cover h-auto min-h-[490px]"
                        width={1440}
                        height={375}
                    />
                    <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                        <h2 className="text-white text-4xl font-sans font-bold text-center">
                            Get a Demo
                        </h2>
                        <Link href={"/requestdemo"}>
                            <button className="bg-[#1747C8] font-sans text-white py-4 px-16 rounded-md text-lg  hover:bg-opacity-60">
                                Request Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h1 className="font-bold text-center text-4xl font-sans">
                        Frequently asked questions
                    </h1>
                    <div className="flex justify-center items-center">
                        <FAQ numberOfQuestions={5} useGridCols2={false} faqData={faqDataHome} />
                    </div>
                </div>
            </section> */}
            <Footer />
        </div >
    )
}
export default Blogs;