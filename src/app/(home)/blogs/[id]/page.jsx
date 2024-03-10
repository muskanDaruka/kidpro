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
const NewBlog = () => {
    return (
        <div>
            <section className="relative">
                <div className="bg-[url('/images/banner-bg.png')]">
                    <div className="flex lg:flex-row">
                        <Link href="/">

                            <h2 className="font-bold text-white mt-5 ml-[50px] lg:text-left">Home</h2>

                        </Link>

                        <Link href="/blogs">
                            <div className="flex">
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">&gt;</h2>
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">Blogs</h2>
                            </div>
                        </Link>

                        <Link href="/blogs/[id]" as="/blogs/blogs-title">
                            <div className="flex">
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">&gt;</h2>
                                <h2 className="font-bold text-white mt-5 ml-2 lg:text-left">Blogs Title</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="relative flex flex-col lg:flex-row">
                        <div className="lg:flex mx-5 my-5 font-bold">
                            <div className="lg:w-1/2">
                                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                    {/* {pageExerciseData[0].name} */}
                                    Bird Dog
                                </h2>
                                <h2 className="text-white text-xl font-normal md:ml-8 my-5">
                                    {/* {pageExerciseData[0].description} */}
                                    The bird dog is a simple core exercise that improves stability, encourages a neutral spine, and relieves low back pain. It strengthens your core, hips, and back muscles. It also promotes proper posture and increases range of motion.
                                </h2>
                            </div>
                            <div className="lg:w-1/2 ">
                                <Image
                                    src="/images/blog.png"
                                    alt="blog"
                                    className="relative w-[793px] object-cover h-[343px]"
                                    width={793}
                                    height={343}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex  bg-[#1747C8] text-white w-full ">
                <div className="flex items-center">
                    <Image
                        src="/images/profile.png"
                        alt="image"
                        className="h-12 w-12 md:w-12 rounded-full m-3"
                        width={12}
                        height={12}
                    />
                    <h3 className="font-bold p-2 md:p-4">Author Name</h3>
                </div>
                <div className="p-4 m-2 font-bold lg:ml-[1350px] ml-40">
                    Published on : 1 Jan 2023
                </div>
            </div>
            {/* <section className="relative bg-white">
                <div className="sm:flex-1">
                    <div className="sm:flex">
                        <div className="items-center space-y-1 m-5">
                            <div className="flex flex-col md:flex-row" >
                                <video controls className="w-full md:w-1/3 h-[400px] md:h-[500px] sm:m-4 md:m-8">
                                    <source src="https://example.com/path-to-your-video.mp4" type="video/mp4" />
                                </video>
                                <div className="md:w-1/2">
                                    <h3 className="font-bold text-xl text-center m-8">Instructions</h3>
                                    <p className="m-8" >
                                        Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis
                                        Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis</p>
                                    <p className="m-8" >
                                        Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis
                                        Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis</p>
                                </div>
                            </div>
                            <div>
                                <p className="m-8" >
                                    Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis
                                    Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis</p>
                                <p className="m-8" >
                                    Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis
                                    Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis</p>
                                <p className="m-8 text-xl font-bold">
                                    To Know more, Sed ut perspiciatis unde omnis iste natus. Dial{" "}
                                    <span className="text-[#1747C8]">0129-4040404</span> or click on{" "}
                                    <span className="text-[#1747C8]">
                                        &lsquo;Nemo enim ipsam voluptatem quia voluptas sit (CTA)&rsquo;
                                    </span>
                                    .
                                </p>
                            </div>
                        </div> */}

            <section className="relative bg-white">
                <div className="sm:flex-1">
                    <div className="sm:flex">
                        <div className="items-center space-y-1 m-5">
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <div className="m-8 bg-gradient-to-b from-blue-200 to-white p-2">
                                <h3 className="m-8 font-bold">Table of Content</h3>
                                <p className="ml-8 font-normal">H2 tag1</p>
                                <p className="ml-8 font-normal">H2 tag2</p>
                                <p className="ml-8 font-normal">H2 tag4</p>
                                <p className="ml-8 font-normal">H2 tag5</p>
                                <p className="ml-8 font-normal">H2 tag6</p>
                                <p className="ml-8 font-normal">H2 tag7</p>
                                <p className="ml-8 font-normal">H2 tag8</p>
                            </div>
                            <h1 className="m-8 text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur iscing elit (Blog Subtopic)</h1>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <center>
                                <Image
                                    src="/images/blog.png"
                                    alt="image"
                                    className="h-[272.037px] md:h-auto md:w-[823px] rounded-lg object-fit"
                                    width={823}
                                    height={272.037}
                                />
                            </center>
                            <h1 className="m-8 text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur iscing elit (Blog Subtopic)</h1>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <p className="m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <ul className="flex items-center md:justify-start justify-left gap-8 mt-5 md:mt-8 m-8">
                                <h3 className="font-normal w-12 h-8 rounded-md text-center md:text-left">
                                    Share
                                </h3>
                                <li>
                                    <Image
                                        className="w-12 h-12 "
                                        src="/images/facebook.png"
                                        alt="Facebook"
                                        width={12}
                                        height={12}
                                    />
                                </li>
                                <li>
                                    <Image
                                        className="w-12 h-12 "
                                        src="/images/twitter.png"
                                        alt="Twitter"
                                        width={12}
                                        height={12}
                                    />
                                </li>
                            </ul>
                            <p className="m-8 text-xl font-bold">
                                To Know more, Sed ut perspiciatis unde omnis iste natus. Dial{" "}
                                <span className="text-[#1747C8]">0129-4040404</span> or click on{" "}
                                <span className="text-[#1747C8]">
                                    &lsquo;Nemo enim ipsam voluptatem quia voluptas sit (CTA)&rsquo;
                                </span>
                                .
                            </p>
                        </div>


                        <div className="w-full md:w-[455px] md:border-l border-gray-400 p-10">
                            <div className="relative md:block hidden">
                                <Image
                                    src="/images/Rectangle 397.png"
                                    alt="blogs"
                                    className="relative w-full object-cover h-auto min-h-[490px] "
                                    width={478}
                                    height={490}
                                />
                                <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                                    <h2 className="mt-[200px] text-white text-4xl font-bold">
                                        Get customized classes
                                    </h2>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <h1 className="flex-1 justify-between">Trending Blogs</h1>
                                <h1 className="text-[#1747C8] underline">View All</h1>
                            </div>
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
            <section className="relative flex items-center justify-center w-full min-h-[322px] bg-gradient-to-b from-blue-800 to-blue-100">
                <div className="p-4 sm:p-8">
                    <h1 className="text-center font-bold text-2xl sm:text-3xl text-white font-baloo-chettan-2">Subscribe to our newsletter</h1>
                    <p className="text-center font-normal text-white mt-4 font-baloo-chettan-2">Ready to get started?</p>
                    <div className="flex items-center mt-4 ml-2 sm:ml-6">
                        <input
                            className="w-[230px] h-[50px] border-[1px] p-4 rounded-md  mt-2 sm:mt-0"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                        />
                        <button className="w-[126px] h-[50px] border-[1px] rounded-md bg-black text-white font-normal mt-2 sm:mt-0 font-baloo-chettan-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <h1 className="text-center font-bold text-4xl p-2">Related Blogs</h1>
                <div className="flex flex-col sm:flex-row items-center justify-center ">
                    <div className="flex mx-auto justify-center">
                        {blogs.slice(0, 3).map((blog, index) => (
                            <div
                                key={index}
                                className={` w-full${index % 2 === 0 ? " ml-2 " : " ml-2 "
                                    } ${index > 0 ? "hidden sm:flex" : ""}`}
                            >
                                <Link href={`/blogs/${blog._id}`}>
                                    <div key={blog._id} className="mb-8 w-full md:w-[393px]">
                                        <Image
                                            src={blog.blogImgUrl}
                                            alt="blog_banner"
                                            className="h-[272.037px] w-[393px] object-cover mb-4 rounded-lg"
                                            width={393}
                                            height={272.037}
                                        />
                                        <h1 className="font-bold text-2xl ml-2 md:ml-2">
                                            {blog.name}
                                        </h1>
                                        <p className="text-normal ml-2 md:ml-2">{blog.summary}</p>
                                        <Link
                                            href={`/blogs/${blog._id}`}
                                            id="readMoreLink"
                                            className="text-[#1747C8] transition duration-300 hover:underline mt-5 block ml-2 md:ml-2"
                                        >
                                            Read More&gt;&gt;
                                        </Link>
                                        <div className="flex mt-5 ml-2 md:ml-2">
                                            <span className="text-black font-bold">21 October 2023</span>
                                            <span className="font-bold ml-40 md:ml-40">{blog.category}</span>
                                        </div>
                                    </div>
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