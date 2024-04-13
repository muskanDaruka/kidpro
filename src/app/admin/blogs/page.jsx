"use client";

import BlogCards from "../../../components/BlogCard";
import Pagination from "../../../components/Pagination";
import { useAllBlogs, useDeleteBlog } from "../../../hooks/blogs.hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
    const { data: blogData, isLoading, isError } = useAllBlogs();
    const { mutate: deleteBlog } = useDeleteBlog();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const blogs = blogData?.data?.data;
    const onDeleteBlog = async (id) => {
        await deleteBlog(id);
    };

    useEffect(() => {
        if (Array.isArray(blogs)) { // Check if blogs is an array
            const filtered = blogs.filter(blog =>
                blog.name && blog.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBlogs(filtered);
        }
    }, [searchTerm, blogs]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return <div>Error loading exercises. Please try again later.</div>;
    }

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
                                    onChange={handleInputChange}
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
                <div className="w-full flex flex-wrap items-center justify-between gap-5 my-8 ml-0">
                    {Array.isArray(blogs) && filteredBlogs.length > 0 && currentItems.map((blog) => (
                        <BlogCards {...blog} key={blog._id} onDeleteBlog={onDeleteBlog} />
                    ))}
                </div>
                <div className="w-full flex justify-end">
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={filteredBlogs.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>

    );
};

export default BlogPage;
