"use client";

import Image from "next/image";
import { BlockNoteView } from "@blocknote/react";
import {
    uploadToTmpFilesDotOrg_DEV_ONLY,
    BlockNoteEditor,
} from "@blocknote/core";
// import leftArrow from "../../../../images/icons/leftArrow.svg";
import "@blocknote/core/style.css";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
// import { useBlogById, useCreateBlog, useUpdateBlog } from "@/hooks/blogs.hooks";
import { useParams, useRouter } from "next/navigation";

const NewBlogPage = () => {
    const navigation = useRouter();
    const { id } = useParams();
    // const { data: blogData } = useBlogById(id);
    // const { mutate: addBlog } = useCreateBlog();
    // const { mutate: updateBlog } = useUpdateBlog({});
    const [blog, setBlog] = useState({
        _id: "",
        blogImgUrl: "",
        name: "",
        summary: "",
        category: "",
        contents: "",
        metaTitle: "",
        description: "",
        keywords: "",
        blogSlugUrl: "",
        faqQues: "",
        faqAns: "",
        ctaBlogImg: "",
        ctaBlogImgUrl: ""
    });

    // useEffect(() => {
    //     console.log(blogData);
    //     if (blogData?.data?.data) {
    //         setBlog(blogData?.data?.data);
    //     }
    // }, [blogData]);

    // const editor = {
    //     onEditorContentChange: async (editor) => {
    //         // Log the document to console on every update
    //         const markdown = await editor.blocksToMarkdown(
    //             editor.topLevelBlocks
    //         );
    //         console.log(markdown);
    //         setBlog((prev) => ({
    //             ...prev,
    //             contents: markdown,
    //         }));
    //     },
    //     domAttributes: {
    //         editor: {
    //             class: "bg-white h-40 border border-gray-300 overflow-scroll",
    //             "data-test": "editor",
    //         },
    //     },
    //     uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
    // }   ;

    const onHandleChange = (e) => {
        const {
            target: { name, value },
        } = e;
        setBlog((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const onFormKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };
    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(id)
            if (id !== "new") {
                console.log("Updated:", blog);
                await updateBlog(blog);
            } else {
                console.log("blog", blog)
                await addBlog(blog);

            }

            navigation.push("/admin/blogs"); // Use push instead of back to navigate to the updated page
        } catch (error) {
            console.error("Error updating blog: ", error);
        }
    };

    return (

        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20"> &larr;
                {/* <Link href={"/admin/blogs"}>
                    <Image src="images/arrow-left.png" alt="Back" width={24} height={24} />
                </Link> */}
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full" onKeyDown={onFormKeyDown}>
                <div className="flex flex-col gap-5">
                    <h5>Add New Blog</h5>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image">Upload blog image</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="blogImgUrl"
                                onChange={onHandleChange}
                                value={blog.blogImgUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="name">Blog title</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.name}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="summary">Blog summary</label>
                        <textarea
                            id="summary"
                            name="summary"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.summary}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.category}
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="contents">Blog Contents</label>
                        <textarea
                            id="content"
                            name="content"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.content}
                        />
                    </div>
                    <div className="grid gap-2 w-full" >
                        <label htmlFor="name" > Meta title </label>
                        < input
                            type="text"
                            id="metaTitle"
                            name="metaTitle"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.metaTitle}
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" > Meta description </label>
                        < input
                            type="text"
                            id="description"
                            name="description"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.description}
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" > Meta Keywords </label>
                        < input
                            type="text"
                            id="keywords"
                            name="keywords"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.keywords}
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" > Blog Slug Url </label>
                        < input
                            type="text"
                            id="blogSlugUrl"
                            name="blogSlugUrl"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.blogSlugUrl}
                        />
                    </div>
                    <div className="flex items-end justify-between gap-3" >
                        <div className="grid gap-2 w-full" >
                            <label htmlFor="ques" > Input Field to FAQs </label>
                            < input
                                type="text"
                                id="faqQues"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="faqQues"
                                onChange={onHandleChange}
                                value={blog.faqQues}
                            />
                            < input
                                type="text"
                                id="faqAns"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="faqAns"
                                onChange={onHandleChange}
                                value={blog.faqAns}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Add
                        </button>
                    </div>
                    < div className="flex items-end justify-between gap-3" >
                        <div className="grid gap-2 w-full" >
                            <label htmlFor="image" > CTA blog image </label>
                            < input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="ctaBlogImg"
                                onChange={onHandleChange}
                                value={blog.ctaBlogImg}
                            />
                        </div>
                        < button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    < div className="flex items-end justify-between gap-3" >
                        <div className="grid gap-2 w-full" >
                            <label htmlFor="image" > CTA blog image Url </label>
                            < input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="ctaBlogImgUrl"
                                onChange={onHandleChange}
                                value={blog.ctaBlogImgUrl}
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md"
                        >
                            {/* TODO: Plus Icon */}Browse
                        </button>
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form >
        </div >

    );
};
export default NewBlogPage;
