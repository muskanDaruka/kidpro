/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";
import { useState, useEffect } from "react";

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

const NewBlog = ({ params }) => {
    const { data: blogData, isLoading, isError } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    const [email, setEmail] = useState("");
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
    const pageData = blogs.filter(function (element) {
        return element._id === params.id;
    });
    console.log("pageData", pageData);
    console.log("blogs", blogs);
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const otherBlogs = blogs.filter((blog) => blog._id !== params.id);
    // if (blogs.length === 0) {
    //   return null;
    // }
    // const prevSlide = () => {
    //   setCurrentSlide((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
    // };

    // const nextSlide = () => {
    //   setCurrentSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
    // };
    // useEffect(() => {
    //     const handleResize = () => {
    //         setCenterSlidePercentage(window.innerWidth > 425 ? 33.3333 : 100);
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    return (
        <div>
            <section className="relative">
                <div className="bg-[url('/images/home/banner-bg.png')]">
                    <div className="flex lg:flex-row">
                        <Link href="/">

                            <h2 className="font-bold font-sans text-white mt-5 ml-[50px] lg:text-left">Home</h2>

                        </Link>

                        <Link href="/blogs">
                            <div className="flex">
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">&gt;</h2>
                                <h2 className="font-bold font-sans text-white mt-5 ml-2 lg:text-left">Blogs</h2>
                            </div>
                        </Link>

                        <Link href="/blogs/[id]" as="/blogs/blogs-title">
                            <div className="flex">
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">&gt;</h2>
                                <h2 className="font-bold font-sans text-white mt-5 ml-2 lg:text-left">Blogs Title</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="mx-5 font-bold">
                            <div>
                                <h2 className="flex items-center justify-center text-white font-sans text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 sm:m-6">
                                    {pageData[0].name}
                                </h2>
                                <h2 className="flex items-center justify-center text-center text-white font-sans text-xl font-normal md:ml-8 my-5">
                                    {pageData[0].description}
                                </h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={pageData[0].blogImgUrl}
                                    alt="blog"
                                    className="relative w-[793px] object-cover h-[343px] max-w-full max-h-full p-4"
                                    width={793}
                                    height={343}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-between bg-[#1747C8] text-white w-full ">
                <div className="flex items-center">
                    <Image
                        src="/images/home/profile.png"
                        alt="image"
                        className="h-12 w-12 md:w-12 rounded-full m-3"
                        width={12}
                        height={12}
                    />
                    <h3 className="font-bold font-sans p-2 md:p-4">Author Name</h3>
                </div>
                <div className="p-4 m-2 font-bold font-sans">
                    Published on : {currentDate}
                </div>
            </div>
            <section className="relative bg-white">
                <div className="sm:flex-1">
                    <div className="sm:flex">
                        <div className="items-center space-y-1 m-5">
                            <p className="m-8 font-sans">
                                {pageData[0].contents}
                            </p>
                            <div className="m-8 bg-gradient-to-b from-blue-200 to-white p-2">
                                <h3 className="m-8 font-bold font-sans">Table of Content</h3>
                                <p className="ml-8 font-normal font-sans">H2 tag1</p>
                                <p className="ml-8 font-normal font-sans">H2 tag2</p>
                                <p className="ml-8 font-normal font-sans">H2 tag4</p>
                                <p className="ml-8 font-normal font-sans">H2 tag5</p>
                                <p className="ml-8 font-normal font-sans">H2 tag6</p>
                                <p className="ml-8 font-normal font-sans">H2 tag7</p>
                                <p className="ml-8 font-normal font-sans">H2 tag8</p>
                            </div>
                            <h1 className="m-8 text-2xl font-bold font-sans">Lorem ipsum dolor sit amet, consectetur iscing elit (Blog Subtopic)</h1>
                            <p className="m-8 font-sans">
                                {pageData[0].contents}
                            </p>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={pageData[0].blogImgUrl}
                                    alt="image"
                                    className="h-[272.037px] md:h-auto md:w-[823px] rounded-lg object-fit"
                                    width={823}
                                    height={272.037}
                                />
                            </div>
                            <h1 className="m-8 text-2xl font-bold font-sans">{pageData[0].name}</h1>
                            <p className="m-8 font-sans">
                                {pageData[0].contents}
                            </p>
                            <ul className="flex items-center md:justify-start justify-left gap-8 mt-5 md:mt-8 m-8">
                                <h3 className="font-normal w-12 h-8 rounded-md text-center md:text-left font-sans">
                                    Share
                                </h3>
                                <li>
                                    <Image
                                        className="h-12 w-12"
                                        src="/images/blogs/fb.png"
                                        alt="Facebook"
                                        width={10}
                                        height={10}
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="h-12 w-12"
                                        src="/images/blogs/twitter.png"
                                        alt="Twitter"
                                        width={10}
                                        height={10}
                                    />
                                </li>
                            </ul>
                            <p className="m-8 text-xl font-bold font-sans">
                                To Know more, Sed ut perspiciatis unde omnis iste natus. Dial{" "}
                                <span className="text-[#1747C8] font-sans">0129-4040404</span> or click on{" "}
                                <span className="text-[#1747C8] font-sans">
                                    &lsquo;Nemo enim ipsam voluptatem quia voluptas sit (CTA)&rsquo;
                                </span>
                                .
                            </p>
                        </div>


                        <div className="w-full md:w-[455px] md:border-l border-gray-400 p-10">
                            <div className="relative md:block hidden">
                                <Image
                                    src="/images/home/Rectangle 397.png"
                                    alt="blogs"
                                    className="relative w-full object-cover h-auto min-h-[490px] "
                                    width={478}
                                    height={490}
                                />
                                <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                                    <h2 className="mt-[200px] text-white text-4xl font-bold font-sans">
                                        Get customized classes
                                    </h2>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <h1 className="flex-1 justify-between font-sans">Trending Blogs</h1>
                                <h1 className="text-[#1747C8] underline font-sans">View All</h1>
                            </div>
                            <hr />
                            <div className="mt-10">
                                {trendingCards.map((item, index) => (
                                    <div key={index} className="mt-5 m-5">
                                        <h1 className="font-bold text-xl font-sans">{item.title}</h1>
                                        <p className="font-normal mt-2 font-sans">{item.description}</p>
                                        <a href="#" id="readMoreLink" className="text-[#1747C8] font-sans transition duration-300 hover:underline">
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
                        <h2 className="text-white text-4xl font-bold text-center font-sans">
                            Get a Demo
                        </h2>
                        <Link href={"/"}>
                            <button className="bg-[#1747C8] text-white py-4 px-16 rounded-md text-lg font-sans hover:text-[#1747C8] hover:bg-opacity-30">
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
                        <FAQ numberOfQuestions={5} useGridCols2={false} />
                    </div>
                </div>
            </section> */}
            <section className="relative flex items-center justify-center w-full min-h-[322px] bg-gradient-to-b from-blue-800 to-blue-100">
                <div className="p-4 sm:p-8">
                    <h2 className="text-center font-bold text-2xl sm:text-3xl text-white font-sans">Subscribe to our newsletter</h2>
                    <div className="flex items-center justify-center">
                        <p className="text-center font-normal text-white m-4 font-sans text-xl w-11/12 sm:w-7/12">Get expert tips on childcare management, regulations & parent engagement in KidPro&lsquo;s newsletter.</p>
                    </div>
                    <div className="flex justify-center items-center sm:ml-[265px] w-[400px] rounded-lg bg-white">
                        <input
                            className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                        />
                        <button className="rounded-lg bg-black text-white px-4 py-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <h1 className="text-center font-bold text-4xl p-2 font-sans">Related Blogs</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center ">
                    <div className="flex mx-auto justify-center">
                        {otherBlogs.slice(0, 3).map((blog, index) => (
                            <div
                                key={index}
                                className={` w-full${index % 2 === 0 ? " ml-2 " : " ml-2 "
                                    } ${index > 0 ? "hidden sm:flex" : ""}`}
                            >
                                <Link href={`/blogs/${blog._id}`}>
                                    <BlogUserCards
                                        key={blog.id}
                                        blog={blog}
                                        useInImg
                                        useInSummary
                                        useInName={false}
                                        useInRead={false}
                                        useInDate={false}
                                        useInCategory={false}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}
export default NewBlog;