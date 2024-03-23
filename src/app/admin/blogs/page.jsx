"use client";

import BlogCards from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { useAllBlogs, useDeleteBlog } from "@/hooks/blogs.hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
    const { data: blogData, isLoading } = useAllBlogs();
    const { mutate: deleteBlog } = useDeleteBlog();
    const blogs = blogData?.data?.data;
    const onDeleteBlog = async (id) => {
        await deleteBlog(id);
    };

    if (isLoading) return <div>Loading...</div>;

    return (

        <div className="w-full h-full bg-[#F7F8FC]">
            <div className="p-5 md:p-10 flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <h4 className="mb-4 md:mb-0 font-sans">Blogs</h4>
                    <div className="flex items-center justify-end gap-5 md:ml-auto">
                        <div className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search"
                                    id="search"
                                    className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 pl-8" // Adjust padding for better alignment
                                />
                                {/* <Image
                                    src="/images/search.png"
                                    className="w-5 h-5 absolute p-1 m-1 right-2 top-2"
                                    alt="search"
                                    width={11}
                                    height={11}
                                /> */}
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="bg-[#1747C8] px-4 text-white h-10 rounded-md font-sans"
                            >
                                <Link href={"/admin/blogs/new"}>+Add New</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-10 my-8 ml-0">
                    {Array.isArray(blogs) && blogs.map((blog) => (
                        <BlogCards {...blog} key={blog._id} onDeleteBlog={onDeleteBlog} />
                    ))}
                </div>

                <div className="w-full flex justify-end">
                    <Pagination />
                </div>
            </div>
        </div>

    );
};

export default BlogPage;
