"use client";

import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import leftArrow from "../../../../images/icons/leftArrow.svg"
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useBlogById, useCreateBlog, useUpdateBlog } from "../../../../hooks/blogs.hooks";
import { useParams, useRouter } from "next/navigation";

const NewBlogPage = () => {
    const navigation = useRouter();
    const { id } = useParams();
    const { data: blogData } = useBlogById(id);
    const { mutate: addBlog } = useCreateBlog();
    const { mutate: updateBlog } = useUpdateBlog({});
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
        faq: [],
        ctaBlogImg: "",
        ctaBlogImgUrl: ""
    });

    useEffect(() => {
        console.log(blogData);
        if (blogData?.data?.data) {
            setBlog(blogData?.data?.data);
        }
    }, [blogData]);
    const handleBrowseClick = (fieldName) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,.jpg,.jpeg,.png,.gif,.bmp,.svg'; // Accept only image files
        input.onchange = (e) => {
            const target = e.target;
            if (target.files && target.files.length > 0) {
                const file = target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result) {
                        setBlog({ ...blog, [fieldName]: reader.result });
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };
    const handleEditorChange = (value) => {
        setBlog((prev) => ({ ...prev, contents: value }));
    };
    console.log("faqQues:", blog.faq && blog.faq[0] ? blog.faq[0].ques : '');
    console.log("faqAns:", blog.faq && blog.faq[0] ? blog.faq[0].ans : '');

    const handleAddFAQ = () => {
        setBlog((prev) => ({
            ...prev,
            faq: prev.faq ? [...prev.faq, { ques: "", ans: "" }] : [{ ques: "", ans: "" }]
        }));
    };

    const handleFAQChange = (index, fieldName, value) => {
        const updatedFAQ = [...(blog.faq || [])];
        updatedFAQ[index] = { ...updatedFAQ[index], [fieldName]: value };
        setBlog((prev) => ({
            ...prev,
            faq: updatedFAQ
        }));
    };

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
        if (e.key === 'Enter' && e.target.tagName.toLowerCase() !== 'textarea') {
            e.preventDefault();
        }
    };
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
        ],
    }
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

            navigation.push("/admin/blogs");
        } catch (error) {
            console.error("Error updating blog: ", error);
        }
    };

    return (

        <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
            <div className="w-20">
                <Link href={"/admin/blogs"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <form onSubmit={onHandleSubmit} className="flex-1 w-full" onKeyDown={onFormKeyDown}>
                <div className="flex flex-col gap-5">
                    <h5 className="font-sans">Add New Blog</h5>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="image" className="font-sans">Upload blog image</label>
                            <input
                                type="text"
                                id="image"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                name="blogImgUrl"
                                onChange={onHandleChange}
                                value={blog.blogImgUrl}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md font-sans"
                            onClick={() => handleBrowseClick('blogImgUrl')}
                        >
                            +Browse
                        </button>
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="name" className="font-sans">Blog title</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.name}
                            required
                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="summary" className="font-sans">Blog summary</label>
                        <textarea
                            id="summary"
                            name="summary"
                            className="rounded-md px-3 h-40 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.summary}

                        />
                    </div>
                    <div className="grid gap-2 w-full">
                        <label htmlFor="category" className="font-sans">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            required
                            placeholder="Category"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.category}
                        />
                    </div>
                    <div className="grid gap-2 w-full" aria-required >
                        <label htmlFor="contents">Blog Contents</label>
                        <ReactQuill
                            theme="snow"
                            id="contents"
                            value={blog.contents}
                            onChange={handleEditorChange}
                            modules={modules}
                        />
                    </div>
                    <div className="grid gap-2 w-full mt-8" >
                        <label htmlFor="name" className="font-sans"> Meta title </label>
                        < input
                            type="text"
                            id="metaTitle"
                            name="metaTitle"
                            className="rounded-md px-3 h-10 w-full border border-gray-300 "
                            onChange={onHandleChange}
                            value={blog.metaTitle}
                            required
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" className="font-sans"> Meta description </label>
                        < input
                            type="text"
                            id="description"
                            name="description"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.description}
                            required
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" className="font-sans"> Meta Keywords </label>
                        < input
                            type="text"
                            id="keywords"
                            name="keywords"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.keywords}
                            required
                        />
                    </div>
                    < div className="grid gap-2 w-full" >
                        <label htmlFor="name" className="font-sans" > Blog Slug Url </label>
                        < input
                            type="text"
                            id="blogSlugUrl"
                            name="blogSlugUrl"
                            className="rounded-md px-3 h-10 w-full border border-gray-300"
                            onChange={onHandleChange}
                            value={blog.blogSlugUrl}
                            required
                        />
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="faq">Input Field to FAQs</label>
                            <input
                                type="text"
                                placeholder="Question"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                value={blog.faq && blog.faq[0] ? blog.faq[0].ques : ''}
                                onChange={(e) => handleFAQChange(0, 'ques', e.target.value)} // index is 0 for default input field
                            />
                            <input
                                type="text"
                                placeholder="Answer"
                                className="rounded-md px-3 h-10 w-full border border-gray-300"
                                value={blog.faq && blog.faq[0] ? blog.faq[0].ans : ''}
                                onChange={(e) => handleFAQChange(0, 'ans', e.target.value)} // index is 0 for default input field
                            />
                        </div>
                    </div>

                    {/* Render additional FAQ input fields */}
                    {blog.faq && blog.faq.length > 1 && blog.faq.slice(1).map((blogFAQ, index) => (
                        <div key={index} className="flex items-end justify-between gap-3">
                            <div className="grid gap-2 w-full">
                                <label htmlFor={`faq-${index}`}>Input Field to FAQs</label>
                                <input
                                    type="text"
                                    placeholder="Question"
                                    className="rounded-md px-3 h-10 w-full border border-gray-300"
                                    value={blogFAQ.ques}
                                    onChange={(e) => handleFAQChange(index + 1, 'ques', e.target.value)} // Increment index by 1
                                />
                                <input
                                    type="text"
                                    placeholder="Answer"
                                    className="rounded-md px-3 h-10 w-full border border-gray-300"
                                    value={blogFAQ.ans}
                                    onChange={(e) => handleFAQChange(index + 1, 'ans', e.target.value)} // Increment index by 1
                                />
                            </div>
                        </div>
                    ))}
                    {/* Button to add new FAQ */}
                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md font-sans"
                            onClick={handleAddFAQ}
                        >
                            + Add FAQ
                        </button>
                    </div>
                    < div className="flex items-end justify-between gap-3" >
                        <div className="grid gap-2 w-full" >
                            <label htmlFor="image" className="font-sans"> CTA blog image </label>
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
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md font-sans"
                            onClick={() => handleBrowseClick('ctaBlogImg')}
                        >
                            +Browse
                        </button>
                    </div>
                    < div className="flex items-end justify-between gap-3" >
                        <div className="grid gap-2 w-full" >
                            <label htmlFor="image" className="font-sans"> CTA blog image Url </label>
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
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md font-sans"
                            onClick={() => handleBrowseClick('ctaBlogImgUrl')}
                        >
                            +Browse
                        </button>
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-[#1747C8] px-3 py-2 rounded-md font-sans"
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
