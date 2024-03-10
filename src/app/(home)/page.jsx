import HorizontalList from "@/components/HorizontalList";
import MobileApp from "@/components/MobileApp";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

const data = [
    {
        image: '/images/software.png',
        title: '#1 childcare software',
        description: 'Our cutting-edge childcare management software stands as the #1 choice for childcare centers dedicated to providing top-tier education and care',
        buttonText: 'Learn More',
    },
    {
        image: '/images/time.png',
        title: 'Easy to use & save time',
        description: 'Streamline your day with our easy-to-use software that saves you time and effort.',
        buttonText: 'Discover More',
    },
    {
        image: '/images/time.png',
        title: 'Automatic billing & payments',
        description: 'Eliminate manual childcare billing hassles and reduce errors by 75% with our automated childcare billing and payments system.',
        buttonText: 'Explore Now',
    },
    {
        image: '/images/software.png',
        title: 'Quality connections',
        description: "Quality connections foster a thriving child care community, where 85% of parents feel positively connected to their child's teachers.",
        buttonText: 'Get Started',
    },
];
const list = [
    "Overview",
    "Billing and Payments",
    "Communication",
    "Learning",
    "Childcare Managements",

];
const softwareImages = [
    {
        imageSrc: "/images/settings.png",
        title: "Automation",
        description: "Automation can reduce repetitive tasks by up to 70%, freeing up time for innovation and growth."
    },
    {
        imageSrc: "/images/message.png",
        title: "Real-time messages",
        description: "Stay instantly informed with our childcare management software, fostering seamless communication for a brighter childcare experience"
    },
    {
        imageSrc: "/images/clock.png",
        title: "Efficient",
        description: "Unlock untapped efficiency: By optimizing processes, organizations can reduce costs by up to 30% and increase productivity by up to 20%."
    },
];
const categories = [
    {
        imageSrc: "/images/directors.png",
        alt: "directors",
        title: "Administrators & directors",
        description: "Empower administrators and directors with the tools to manage childcare centers effectively, saving 40% of their time and reducing errors by 70%.",
    },
    {
        imageSrc: "/images/teachers.png",
        alt: "teachers",
        title: "Teachers & staff",
        description: "Unleash your teaching potential with childcare management software - the ultimate tool for nurturing young minds.",
    },
    {
        imageSrc: "/images/parents.png",
        alt: "parents",
        title: "Parents & guardians",
        description: "Stay connected, informed, and financially in control with childcare management software - the comprehensive solution for parents and guardians.",
    },
];
const allPost = [
    {
        title: 'John Doe',
        date: 'Feb 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        title: 'John Doe',
        date: 'Feb 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        title: 'John Doe',
        date: 'Feb 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        title: 'John Doe',
        date: 'Feb 2, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
];
export default function Home() {
    return (
        <div className="mx-auto">
            <div className="sm:w-full w-screen">
                <section className="relative w-full">
                    <div className="bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover h-[881px]">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 ">
                                <div className="bg-none md:bg-[url('/images/planet2.png')] md:bg-no-repeat md:bg-right">
                                    <div className="bg-[url('/images/planet3.png')] bg-no-repeat bg-bottom left-32 top-[80px] text-white md:relative text-center md:text-left right-[72px]">
                                        <div className="bg-[url('/images/bg.png')] bg-cover bg-repeat p-6 rounded-md max-w-[900px]">
                                            <p className=" mb-2 mt-10 text-[clamp(1rem,1.7em,1.5rem)]">Best Childcare Management Software</p>
                                            <h1 className="font-bold mb-2 text-[clamp(1.5rem,1.7em,2.5rem)]">Fueling Daycare Centers</h1>
                                            <p className="font-normal text-[clamp(1rem,1.7em,1.5rem)] mb-4  ">Empower your daycare center with cutting-edge childcare management software, streamlining operations and enhancing child care quality for a seamless and efficient experience.</p>
                                            <button className="w-[202px] h-[52px] bg-white rounded-full text-[#00008B] text-xl font-sans">Request Demo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-none md:bg-[url('/images/planet4.png')] md:bg-no-repeat md:bg-right-top md:mt-5">
                                <Image
                                    src="/images/rocket.png"
                                    alt="rocket"
                                    className="w-[202px] h-[500px] mx-auto md:mr-48 md:mt-10 mt-10"
                                    width={202}
                                    height={500}
                                />
                            </div>
                        </div>
                        <Image
                            src="/images/cloud-design.png"
                            alt="home"
                            className="absolute w-full object-cover opacity-50 top-[835px] md:top-[440px]"
                            width={2109} height={183.95}
                        />
                        <div className="bg-[url('/images/cloud-design-1.png')] md:h-[550px] w-full md:w-full md:relative relative bg-cover bg-center -top-[270px] md:-top-16 flex flex-col justify-center items-center md:pb-[100px]">
                            <h1 className="text-xl sm:text-4xl text-black font-bold font-sans text-center mb-5 mt-32 sm:mt-0">Why choose Kidpro Chidcare Management software</h1>
                            <p className="text-[#426666] font-normal text-center mb-32 font-sans sm:mb-12">Embrace efficiency, simplify management, and nurture growth with our childcare management software.</p>
                        </div>
                    </div>
                </section>
                <section className="relative bg-white sm:h-[350px] flex items-center justify-center top-32 sm:top-0 pb-[180px] ">
                    <div className="grid  sm:grid-cols-2 gap-4 place-content-stretch">
                        {data.map((item, index) => (
                            <div key={index} className={`m-2 p-2 bg-white shadow-2xl rounded-lg sm:w-[597.67px] w-[80%] sm:ml-0 ml-10 ${index > 0 ? 'hidden sm:block' : ''}`}>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <Image src={item.image} alt="home" className="text-center max-w-[50px] max-h-[50px] sm:max-w-full sm:max-h-full mb-4 sm:mb-0" width={50} height={50} />

                                    <div className="ml-4">
                                        <h1 className="text-lg font-semibold font-sans">{item.title}</h1>
                                        <p className="text-sm font-sans">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="hidden sm:block" style={{ marginTop: '50px' }}>
                    <Carousel infiniteLoop={true} showThumbs={false}>
                        {data.map((item, index) => (
                            <div key={index} className={`m-2 p-4 bg-white shadow-2xl rounded-lg sm:w-[597.67px] w-[80%] sm:ml-0 ml-10 ${index > 0 ? 'hidden sm:block' : ''}`}>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <img src={item.image} alt="home" className="text-center p-2 max-w-[50px] max-h-[50px] sm:max-w-full sm:max-h-full mb-4 sm:mb-0" />
                                    <div className="ml-4">
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div> */}
                </section>
                <section className="bg-gradient-to-b from-blue-200 to-white h-[900px] sm:h-[680px] items-center justify-center relative top-0  sm:top-0">
                    <div className="sm:flex flex-wrap justify-center items-center mb-10 sm:mb-4">
                        <div className="sm:flex-1 m-2 p-4 h-[130px] text-center sm:text-left">
                            <div className="sm:flex items-center">
                                <div className="ml-0 sm:ml-[220px]">
                                    <p className="text-gray-500 p-4 sm:pl-0 ml-0 sm:ml-[50px] font-sans">Lorem Ipsum</p>
                                    <h1 className="font-bold ml-0 sm:ml-[50px] text-2xl font-sans">Your complete preschool & <br className="hidden sm:block" />childcare software system.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 m-2 p-4 h-[130px]">
                            <div className="flex items-center">
                                <div className="ml-[30px]">
                                    <p className="text-gray-500 p-4 leading-6 sm:text-xl font-sans">Stay compliant with digital check-in,<br /> health checks,
                                        and room ratio tracking<br /> and run reports quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HorizontalList data={list} />
                    <div className="flex flex-col items-center mr-5  md:flex-row relative ml-4 justify-center mt-10 space-y-4 md:space-y-0 md:space-x-5">
                        {softwareImages.map((item, index) => (
                            <div
                                key={index}
                                className={`w-full md:w-[394px] h-[300px] md:m-0 mb-4 relative bg-white p-5 rounded-md shadow-xl ${index > 0 ? 'hidden sm:block' : ''}`}
                            >
                                <Image
                                    src={item.imageSrc} alt={`blog_banner_${index}`}
                                    className="rounded-lg w-[70px] h-[60px]"
                                    width={70}
                                    height={60}
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-5 text-white">
                                    <h1 className="font-bold text-xl text-black z-10 md:top-[50%] mt-6 font-sans">{item.title}</h1>
                                    <p className="font-normal text-xl text-black opacity-30 z-10 font-sans">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" flex-1 flex items-center justify-center mt-10">
                        <button className="flex w-[190px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl sm:ml-2 pl-5 p-3 font-sans">Read more
                            <Image src="/images/arrow-right.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                        </button>
                    </div>
                </section >
                <section className="bg-white flex flex-col sm:flex-row p-10 gap-10">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <p className="font-normal text-gray-500 opacity-50 mt-8 md:mt-0 font-sans">Center Management</p>
                        <h2 className="text-3xl sm:text-4xl font-bold font-sans">
                            Unlock Seamless Childcare Management with KidsPro: Watch Our Demo!
                        </h2>
                        <h5 className="w-full">
                            <p className="text-left text-lg font-normal leading-9 max-sm:text-justify font-sans">
                                Experience the power of KidsPro&apos;s comprehensive
                                childcare management software in action. Streamline operations,enhance communication, and create a nurturing environment– all in one place.
                                Click below for an exclusive video walkthrough.
                            </p>
                        </h5>
                        <button className=" flex w-[200px] h-[52px] bg-[#1747C8] rounded-full text-white text-xl p-3 font-sans">Watch Demo
                            <Image src="/images/arrow-right.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                        </button>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={"/images/tech.jpeg"}
                            alt="Image"
                            className="object-contain w-full"
                            width={669}
                            height={352}
                        />
                    </div>
                </section>
                <section className="relative bg-white p-5">
                    <p className="font-bold text-gray-500 opacity-50 text-center font-sans">Lorem Ipsum</p>
                    <p className="font-bold text-center text-3xl font-sans">Who uses our <br className="hidden sm:block" />Childcare Management Software?</p>
                    <p className="font-normal text-gray-500 opacity-50 text-center font-sans mb-8">Discover why childcare centers, preschools, and early learning professionals rely on our software to elevate their operations and enhance the childcare experience.</p>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            {categories.map((category, index) => (
                                <div key={index} className={`w-[370px] h-[400px] shadow sm:flex-shrink-0  ${index > 0 ? 'hidden sm:block' : ''}`}>
                                    <Image src={category.imageSrc} alt={category.alt} className="object-fit" width={383.96} height={263.23} />
                                    <h1 className="font-bold font-sans">{category.title}</h1>
                                    <p className="font-normal font-sans">{category.description}</p>
                                    <a className="text-[#1747C8] mt-2 md:mt-4 font-sans">Read more</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <MobileApp />
                <section className="relative bg-gradient-to-br from-[#1D64F0] via-white to-[#1D64F0]">
                    <div className="w-11/12 md:w-2/3 lg:w-65% mx-auto h-auto relative">
                        <div className="hidden sm:block">
                            <div className="pt-44 pl-56 pb-10 ml-[10px] p-4 sm:p-8 md:p-12 lg:p-16">
                                <div className="flex">
                                    <Image
                                        src="/images/quotes.png" alt="quotes"
                                        className="w-[168px] h-[168px]"
                                        width={168}
                                        height={168}
                                    />
                                    <div>
                                        <h1 className="font-bold text-4xl text-center mb-10 font-sans">Happy Clients</h1>
                                        <p className="font-normal text-center text-2xl text-[#4C4C4C] ml-[50px] font-sans">Thriving with KidsPro: Our Happy Clients Speak! Join the league of satisfied preschools revolutionizing childcare management. Discover joy in efficiency, simplicity, and excellence with KidsPro.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="m-10">
                                    <Image
                                        src="/images/f-logo.png" alt="logo"
                                        className="w-[100px] h-[100px] ml-16"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex">
                                        <div className="mt-16 pr-8">
                                            <button className="w-7 h-7 border-black border-radius-2 bg-white">&lt;</button>
                                        </div>
                                        <p className="font-normal text-xl text-[#4C4C4C] pb-2 font-sans">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br className="hidden sm:block" />eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br className="hidden sm:block" /> proident.Duis aute irure dolor in reprehenderit in voluptate velit esse<br className="hidden sm:block" /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat<br className="hidden sm:block" /> non proident.</p>
                                        <div className="mt-16 pl-8">
                                            <button className="w-7 h-7 border-black border-radius-2 bg-white">&gt;</button>
                                        </div>
                                    </div>
                                    <h1 className="font-bold pb-2 ml-16 font-sans">Rowhan Smith</h1>
                                    <div className="flex">
                                        <p className="text-[#4C4C4C] ml-16 font-sans">Parent</p>
                                    </div>
                                </div>
                                <Image
                                    src="/images/image.png" alt="image"
                                    className="w-[300px] h-[300px]"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="block sm:hidden">
                            <div className="p-4 sm:p-8 md:p-12 lg:p-16">
                                <div className="flex flex-col sm:flex-row">
                                    <Image
                                        src="/images/quotes.png" alt="quotes"
                                        className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0"
                                        width={24}
                                        height={24}
                                    />
                                    <div className="mt-4 sm:mt-0 sm:ml-4 md:ml-8 lg:ml-12">
                                        <h1 className="font-bold text-2xl sm:text-4xl text-center sm:text-left mb-4 font-sans">Happy Clients</h1>
                                        <p className="font-normal text-center sm:text-left text-lg sm:text-2xl text-[#4C4C4C] font-sans">
                                            Thriving with KidsPro: Our Happy Clients Speak! Join the league of satisfied preschools revolutionizing childcare management. Discover joy in efficiency, simplicity, and excellence with KidsPro.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/images/image.png" alt="image"
                                        className="w-[200px] h-[200px] mt-8 mb-10"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex">
                                    <div className="mt-16 pr-8">
                                        <button className="w-7 h-7 border-black border-radius-2 bg-white">&lt;</button>
                                    </div>
                                    <p className="font-normal text-sm sm:text-lg text-[#4C4C4C] pb-2 font-sans">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        <br className="hidden sm:block" />eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        <br className="hidden sm:block" /> proident.Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        <br className="hidden sm:block" /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        <br className="hidden sm:block" /> non proident.
                                    </p>
                                    <div className="mt-16 pl-8">
                                        <button className="w-7 h-7 border-black border-radius-2 bg-white">&gt;</button>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-8 flex ">
                                    <Image
                                        src="/images/f-logo.png" alt="logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 mr-4 "
                                        width={16}
                                        height={16}
                                    />
                                    <div>
                                        <h1 className="font-bold text-lg sm:text-xl pb-1 font-sans">Rowhan Smith</h1>
                                        <p className="text-[#4C4C4C] text-sm sm:text-base font-sans">Parent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative ">
                    <div className="flex justify-evenly p-16 bg-white">
                        <div className="hidden sm:block">
                            <h1 className="font-bold text-2xl font-sans">Featured Post</h1>
                            <Image
                                src="/images/childrens.jpeg" alt="image"
                                className="w-[669px] h-[352px] mr-4"
                                width={669}
                                height={352}
                            />
                            <h1 className="font-normal text-base sm:text-xl  mt-8 font-sans">By John Doe May 23, 2022 </h1>
                            <p className="font-bold mt-2 line-clamp-3 text-sm sm:text-base  mt-5 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <p className="font-normal text-base text-normal  mt-2 font-sans">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br className="hidden sm:block" />eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br className="hidden sm:block" /> proident.Duis aute irure dolor in reprehenderit in voluptate velit esse<br className="hidden sm:block" /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat<br className="hidden sm:block" /> non proident.</p>
                            <div className=" mt-5 ">
                                <button className="flex w-[190px] h-[40px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-2 font-sans">Read more
                                    <Image src="/images/arrow-right.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <h1 className="font-bold text-xl sm:text-2xl font-sans">All Post</h1>
                                <Link href="/" className="text-[#1747C8] text-base ml-[100px] sm:ml-[320px] underline font-sans">
                                    View more
                                </Link>
                            </div>
                            {allPost.map((item, index) => (
                                <div key={index} className="mt-5 w-full sm:w-[500px] h-[150px]">
                                    <h1 className="font-normal text-base sm:text-xl font-sans">By {item.title} {item.date}</h1>
                                    <p className="font-bold mt-2 line-clamp-3 text-sm sm:text-base sm:line-clamp-none font-sans">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <div className="bg-gradient-to-b from-blue-200 to-white w-full md:w-full h-full md:h-[873px] p-8 md:p-32 ">
                        <div className="md:flex md:justify-evenly">
                            <div className="md:m-2 ">
                                <p className="font-normal text-[#6B7094] font-sans">FREQUENTLY ASKED QUESTIONS</p>
                                <h1 className="font-bold text-4xl mt-2 font-sans">Frequently Asked Questions</h1>
                            </div>
                            <div className="md:w-[500px] mt-4 md:mt-0">
                                <p className="font-normal text-base text-normal text-xl text-[#6B7094] ml-0  md:mt-0 font-sans">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                </p>
                            </div>
                        </div>
                        <div className="md:flex md:justify-center md:gap-56 mt-8">
                            <div className="md:ml-16">
                                <FAQ numberOfQuestions={10} useGridCols2={true} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative flex items-center justify-center w-full min-h-[322px] bg-gradient-to-b from-blue-800 to-blue-100">
                    <div className="p-4 sm:p-8">
                        <h1 className="text-center font-bold text-2xl sm:text-3xl text-white font-sans">Subscribe to our newsletter</h1>
                        <p className="text-center font-normal text-white mt-4 font-sans">Ready to get started?</p>
                        <div className="flex items-center mt-4 ml-2 sm:ml-6">
                            <input
                                className="w-[230px] h-[50px] border-[1px] p-4 rounded-md  mt-2 sm:mt-0"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                            />
                            <button className="w-[126px] h-[50px] border-[1px] rounded-md bg-black text-white font-normal mt-2 sm:mt-0 font-sans">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center justify-center w-full h-[700px] bg-white p-4">
                    <p className="text-center font-bold text-[#6B7094] text-lg sm:text-xl font-sans">Lorem ipsum</p>
                    <h1 className="font-bold text-center text-2xl sm:text-5xl mt-3 sm:mt-5 font-sans">Ready to get started?</h1>
                    <p className="text-[#6B7094] opacity-50 text-center font-bold mt-3 sm:mt-5 text-sm sm:text-base font-sans">Ready to transform your childcare experience? Get started with KidsPro today. Streamline operations,<br /> enhance communication, and create a nurturing environment for young minds to thrive!</p>
                    <p className="font-bold text-center mt-4 sm:mt-5 text-sm sm:text-base font-sans">Rated 4.9/5 from over 600 reviews.</p>
                    <Image
                        src="/images/playstore-pic.png" alt="image"
                        className="w-full max-w-[500px] h-auto mt-4 sm:ml-0 sm:mr-0"
                        width={474} height={135}
                    />
                    <div className="flex items-center mt-3 sm:mt-6">
                        <hr className="w-16 sm:w-32" />
                        <span className="mx-2 font-sans">Or</span>
                        <hr className="w-16 sm:w-32" />
                    </div>
                    <div className="mt-5 sm:mt-10">
                        <button className="flex w-full max-w-[220px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl sm:ml-2 pl-3 sm:pl-5 p-2 font-sans">
                            Request Demo
                            <Image src="/images/arrow-right.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
                        </button>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}