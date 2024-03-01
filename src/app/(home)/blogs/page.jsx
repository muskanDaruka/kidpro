import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

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
        date: "21 Feb 2024",
        category: "Category1"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "21 Feb 2024",
        category: "Category2"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
        date: "21 Feb 2024",
        category: "Category3"
    }
]
const blogs = [
    // Sample blog data
    {
        _id: '1',
        blogImgUrl: '/images/blog.png',
        name: 'Blog 1',
        summary: 'Summary of Blog 1',
        category: 'Technology',
    },
    {
        _id: '2',
        blogImgUrl: '/images/blog.png',
        name: 'Blog 2',
        summary: 'Summary of Blog 2',
        category: 'Travel',
    },
    {
        _id: '3',
        blogImgUrl: '/images/blog.png',
        name: 'Blog 1',
        summary: 'Summary of Blog 1',
        category: 'Technology',
    },
    {
        _id: '4',
        blogImgUrl: '/images/blog.png',
        name: 'Blog 2',
        summary: 'Summary of Blog 2',
        category: 'Travel',
    },

];
const Blogs = () => {
    return (
        <div>
            <section className="relative">
                <div>
                    <Image
                        src="/images/banner-bg.png"
                        alt="blog_banner"
                        className="relative w-full object-cover h-[700px]"
                        width={1440}
                        height={827}
                    />
                    <div className="bg-[url('/images/bg.png')] bg-cover bg-repeat absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                        <h2 className="text-white text-5xl font-bold ">Our Blogs</h2>
                        <h3 className="text-white text-2xl font-normal w-583 h-168">
                            <center>
                                Lorem ipsum dolor sit amet, consectetur (Blog title)
                                Lorem ipsum dolor sit amet, consectetur (Blog title)
                            </center>
                        </h3>
                    </div>
                </div>
            </section>
            <section className="relative bg-white">
                <div className="sm:flex-1">
                    <div className="sm:flex">
                        <div className="items-center space-y-1 m-5">
                            <div>
                                {blogs && (
                                    <div className="mt-5 border-slate-25 border-2 rounded-lg w-full mx-auto md:ml-0 md:mr-0 ">
                                        <div className="flex flex-col md:flex-row mx-auto">
                                            <div>
                                                <Image
                                                    src="/images/blog.png"
                                                    alt="image"
                                                    className="h-[272.037px] md:h-[271.037] md:w-full w-full rounded-lg object-fit"
                                                    width={330} height={270}
                                                />
                                            </div>
                                            <div className="md:flex-grow h-[272.037px] md:h-auto">
                                                <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-5">
                                                    Blog-title
                                                </h1>
                                                <p className="text-normal mt-2 md:ml-5 ">
                                                    description: &quot;Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis&quot;
                                                </p>
                                                <Link
                                                    href={`/blogs`}
                                                    id="readMoreLink"
                                                    className="text-[#1747C8] transition duration-300 hover:underline mt-5 block ml-5"
                                                >
                                                    Read More&gt;&gt;
                                                </Link>
                                                <div className="flex md:flex-row items-start justify-between">
                                                    <span className="text-black font-bold mt-5 ml-5">
                                                        21 October 2023
                                                    </span>
                                                    <span className="font-bold mt-5 ml-2 md:ml-35 md:mr-5 mr-2">
                                                        Category
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="w-full sm:container mx-auto flex flex-wrap p-5 sm:p-10 justify-center items-center">
                                    {blogs.map((blog) => (
                                        <div key={blog._id} className="mb-8 w-full md:w-2/5">
                                            <Image
                                                src={blog.blogImgUrl}
                                                alt="blog_banner"
                                                className="h-[272.037px] w-[393px] object-cover mb-4 rounded-lg"
                                                width={393}
                                                height={272.037}
                                            />
                                            <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-2 md:ml-5">
                                                {blog.name}
                                            </h1>
                                            <p className="text-normal mt-2 ml-2 md:ml-5">{blog.summary}</p>
                                            <Link
                                                href={`/blogs/${blog._id}`}
                                                id="readMoreLink"
                                                className="text-[#1747C8] transition duration-300 hover:underline mt-5 block ml-2 md:ml-5"
                                            >
                                                Read More&gt;&gt;
                                            </Link>
                                            <div className="flex mt-5 ml-2 md:ml-5">
                                                <span className="text-black font-bold">21 October 2023</span>
                                                <span className="font-bold ml-40 md:ml-40">{blog.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className=" flex justify-center m-[50px]">
                                    <button className="w-[70px] text-black border-slate-250 border-2">
                                        &lt;&lt;Pre
                                    </button>
                                    <button className="w-[70px] text-black border-slate-250 border-2">
                                        Page 1
                                    </button>
                                    <button className="w-[70px] text-[#1747C8] border-slate-250 border-2">
                                        Next&gt;&gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[455px] md:border-l border-gray-400 p-10">
                            <h1 className=" flex-1 justify-between">Trending Blogs</h1>
                            <hr />
                            <div className="mt-10">
                                {trendingCards.map((item, index) => (
                                    <div key={index} className="mt-5 m-5">
                                        <h1 className="font-bold text-xl">{item.title}</h1>
                                        <p className="font-normal mt-2">{item.description}</p>
                                        <a href="#" id="readMoreLink" className="text-[#1747C8] transition duration-300 hover:underline">
                                            Read More&gt;&gt;
                                        </a>
                                        <div className="flex mb-5">
                                            <span className="text-black font-bold mt-5">{item.date}</span>
                                            <span className="font-bold mt-5 md:ml-[100px] ml-40">{item.category}</span>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                            <h2 className="font-bold text-2xl ml-5 mt-10">Categories</h2>
                            <div className="flex flex-wrap ml-5 mt-10">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg `}
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
                        src="/images/GetaDemo.png"
                        alt="banner"
                        className="relative w-screen object-cover h-auto min-h-[490px]"
                        width={1440}
                        height={375}
                    />
                    <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                        <h2 className="text-white text-4xl font-bold text-center">
                            Get a Demo
                        </h2>
                        <Link href={"/"}>
                            <button className="bg-[#1747C8] text-white py-4 px-16 rounded-md text-lg">
                                Request Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h1 className="font-bold text-center text-4xl">
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