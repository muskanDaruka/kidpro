/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const BlogUserCards = ({
    blog,
    useInImg,
    useInName,
    useInSummary,
    useInRead,
    useInDate,
    useInCategory,
    useInNameFeatured,
    useInCategoryFeatured,
    useInDateFeatured,
}) => {

    return (
        <div className="w-full md:w-full rounded-md overflow-hidden mt-2">
            <div className="w-full md:w-[400px] sm:mr-4 border-slate-250 border-2 rounded-lg flex flex-col">
                {useInImg && (
                    <img
                        src={blog.blogImgUrl}
                        alt="blog_banner"
                        className="h-[272.037px] w-full object-cover mb-4 rounded-lg"
                    />
                )}
                <div className=" flex flex-col md:flex-grow md:h-auto ">

                    {useInDateFeatured && (
                        <span className="text-left ml-2 md:ml-5">
                            <span className="font-normal font-sans" style={{ color: '#475467' }}>  By </span>
                            <span className="font-normal font-sans" style={{ color: '#1747C8' }}>John Deo</span>
                            <span className="font-normal font-sans" style={{ color: '#475467' }}> | March 20, 2024</span>
                        </span>
                    )}
                    {useInName && (
                        <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-2 md:ml-5 font-sans">
                            {blog.name}
                        </h1>
                    )}
                    {useInNameFeatured && (
                        <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-2 md:ml-5 flex justify-between font-sans">
                            {blog.name}
                            <Link
                                href={`/blogs/${blog._id}`}
                                id="readMoreLink"
                            >
                                <img
                                    src="/images/attendance/arrow-up-right.png"
                                    alt="arrow-up-right"
                                    className="m-1"
                                />
                            </Link>
                        </h1>
                    )}
                    {useInSummary && (
                        <p className="text-[#475467] text-normal mt-2 ml-2 md:ml-5 font-sans">{blog.summary}</p>
                    )}
                    {useInRead && (
                        <Link
                            href={`/blogs/${blog._id}`}
                            id="readMoreLink"
                            className="text-[#f2994a] transition duration-300 hover:underline mt-5 block ml-2 md:ml-5 font-sans"
                        >
                            Read More&gt;&gt;
                        </Link>
                    )}
                    <div className="flex mt-5 ml-2 md:ml-5">
                        {useInDate && (
                            <span className="text-black font-bold font-sans">March 20, 2024</span>
                        )}
                        {useInCategory && (
                            <span className="font-bold ml-40 md:ml-40 font-sans">{blog.category}</span>
                        )}
                    </div>
                    {useInCategoryFeatured && (
                        <div className="flex justify-left ml-2 md:ml-5 border-1 bg-[#E9D7FE] w-[150px] p-1 rounded-full mb-2 ">

                            <span className="font-normal text-[#6941C6] text-center font-sans">{blog.category}</span>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogUserCards;
