/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";

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
        category: "Category1"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "March 20, 2024",
        category: "Category2"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "March 20, 2024",
        category: "Category3"
    }
]
const Blogs = () => {
    const { data: blogData, isLoading } = useAllBlogs();
    const blogs = blogData?.data?.data || [];

    return (
        <div>
            <section className="relative">
                <div>
                    <Image
                        src="/images/home/banner-bg.png"
                        alt="blog_banner"
                        className="relative w-full object-cover h-[700px]"
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
                                {blogs[0] && (
                                    <div className="mt-5 border-slate-25 border-2 rounded-lg w-full mx-auto md:ml-0 md:mr-0 ">
                                        <div className="flex flex-col md:flex-row mx-auto">
                                            <div>
                                                <Image
                                                    src={blogs[0]?.blogImgUrl}
                                                    alt="image"
                                                    className="h-[272.037px] md:h-[271.037] md:w-full w-full rounded-lg object-fit"
                                                    width={330} height={270}
                                                />
                                            </div>
                                            <div className="md:flex-grow h-[272.037px] md:h-auto">
                                                <h1 className="font-bold font-sans text-2xl mt-2 md:mt-5 ml-5">
                                                    {blogs[0]?.name}
                                                </h1>
                                                <p className="text-normal font-sans mt-2 md:ml-5 ">
                                                    {blogs[0]?.summary}                                                </p>
                                                <Link
                                                    href={`/blogs/${blogs[0]?._id}`}
                                                    id="readMoreLink"
                                                    className="text-[#1747C8] transition duration-300 hover:underline font-sans mt-5 block ml-5"
                                                >
                                                    Read More&gt;&gt;
                                                </Link>
                                                <div className="flex md:flex-row items-start justify-between">
                                                    <span className="text-black font-bold mt-5 ml-5 font-sans">
                                                        March 20, 2024
                                                    </span>
                                                    <span className="font-bold font-sans mt-5 ml-2 md:ml-35 md:mr-5 mr-2">
                                                        {blogs[0]?.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="w-full sm:container mx-auto flex flex-wrap p-5 sm:p-10 justify-center items-center">
                                    {blogs.map((blog, index) => (
                                        index % 2 === 1 && (
                                            <div key={index / 2} className="flex flex-col md:flex-row mb-4 sm:mb-0  md:space-x-4">
                                                <BlogUserCards key={blog.id} blog={blog} useInImg useInName useInSummary useInRead useInDate useInCategory />
                                                {blogs[index + 1] && (
                                                    <BlogUserCards key={blogs[index + 1].id} blog={blogs[index + 1]} useInImg useInName useInSummary useInRead useInDate useInCategory />
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>

                                <div className=" flex justify-center m-[50px]">
                                    <button className="w-[70px] font-sans text-black border-slate-250 border-2">
                                        &lt;&lt;Pre
                                    </button>
                                    <button className="w-[70px] font-sans text-black border-slate-250 border-2">
                                        Page 1
                                    </button>
                                    <button className="w-[70px] font-sans text-[#1747C8] border-slate-250 border-2">
                                        Next&gt;&gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[455px] md:border-l border-gray-400 p-10">
                            <h1 className=" flex-1 justify-between font-sans">Trending Blogs</h1>
                            <hr />
                            <div className="mt-10">
                                {trendingCards.map((item, index) => (
                                    <div key={index} className="mt-5 m-5">
                                        <h1 className="font-bold text-xl">{item.title}</h1>
                                        <p className="font-normal mt-2">{item.description}</p>
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
                            <h2 className="font-bold text-2xl ml-5 mt-10 font-sans">Categories</h2>
                            <div className="flex flex-wrap ml-5 mt-10">
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
                        <Link href={"/"}>
                            <button className="bg-[#1747C8] font-sans text-white py-4 px-16 rounded-md text-lg">
                                Request Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h1 className="font-bold text-center text-4xl font-sans">
                        Frequently asked questions
                    </h1>
                    <div className="flex justify-center items-center">
                        <FAQ numberOfQuestions={5} useGridCols2={false} />
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}
export default Blogs;