/* eslint-disable @next/next/no-img-element */
"use client";
import HorizontalList from "../../components/HorizontalList";
import MobileApp from "../../components/MobileApp";
import Link from "next/link";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useState } from "react";

const data = [
    {
        image: '/images/home/software.png',
        title: '#1 childcare software',
        description: 'Our cutting-edge childcare management software stands as the #1 choice for childcare centers dedicated to providing top-tier education and care',
        buttonText: 'Learn More',
    },
    {
        image: '/images/home/time.png',
        title: 'Easy to use & save time',
        description: 'Streamline your day with our easy-to-use software that saves you time and effort.',
        buttonText: 'Discover More',
    },
    {
        image: '/images/home/time.png',
        title: 'Streamline Communication',
        description: 'Offers individual messaging, easy two-way communication, broadcast options, and daily reports - all in one convenient platform.',
        buttonText: 'Explore Now',
    },
    {
        image: '/images/home/software.png',
        title: 'Quality connections',
        description: "Quality connections foster a thriving child care community, where 85% of parents feel positively connected to their child's teachers.",
        buttonText: 'Get Started',
    },
];
const list = [
    "Digital Attendance",
    "Communication",
    "Daily Reports",
    "Enrollment",
];
const softwareImages = [
    {
        imageSrc: "/images/home/settings.png",
        title: "Automation",
        description: "Automation can reduce repetitive tasks by up to 70%, freeing up time for innovation and growth."
    },
    {
        imageSrc: "/images/home/message.png",
        title: "Real-time messages",
        description: "Stay instantly informed with our childcare management software, fostering seamless communication for a brighter childcare experience"
    },
    {
        imageSrc: "/images/home/clock.png",
        title: "Efficient",
        description: "Unlock untapped efficiency: By optimizing processes, organizations can reduce costs by up to 30% and increase productivity by up to 20%."
    },
];
const categories = [
    {
        imageSrc: "/images/home/directors.png",
        alt: "directors",
        title: "Administrators & directors",
        description: "Empower administrators and directors with the tools to manage childcare centers effectively, saving 40% of their time and reducing errors by 70%.",
    },
    {
        imageSrc: "/images/home/teachers.png",
        alt: "teachers",
        title: "Teachers & staff",
        description: "Unleash your teaching potential with childcare management software - the ultimate tool for nurturing young minds.",
    },
    {
        imageSrc: "/images/home/parents.png",
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

const faqDataHome = [
    { question: 'What is childcare management software, and why do childcare centers need it?', answer: 'Childcare management software is a comprehensive tool designed to streamline operations in childcare centers. It aids in managing attendance, child care billing, communication, and more, improving overall efficiency.' },
    { question: 'How does childcare management software help in parent communication?', answer: 'Childcare management software facilitates real-time communication between parents and caregivers. Parents can receive updates, photos, and important announcements, fostering a transparent and collaborative environment.' },
    { question: 'What features should I look for when choosing childcare management software?', answer: 'Look for features like attendance tracking, childcare billing and communication tools, lesson planning, and comprehensive reporting. The software should align with the specific needs of your childcare center.' },
    { question: 'Is childcare management software secure and compliant with regulations?', answer: 'Yes, reputable childcare management software prioritizes security and compliance. Ensure the software follows industry standards, like GDPR and HIPAA, to protect sensitive information and maintain legal compliance.' },
    { question: 'Can childcare management software help with staff management and payroll?', answer: 'Absolutely. The software often includes modules for staff scheduling, attendance tracking, and payroll management, streamlining administrative tasks and ensuring accurate payroll processing.' },
    { question: 'How user-friendly is childcare management software, and what training is provided?', answer: "The best childcare management software is designed to be user-friendly. Many providers offer training sessions, tutorials, and customer support to help users navigate and maximize the software's potential." },
    { question: 'Can I customize the childcare management software to fit the unique needs of my center?', answer: "Yes, customization is a key feature of childcare management software. You can often tailor the software to match your center's specific requirements, ensuring a more personalized and effective solution." },
    { question: 'What kind of support and updates can I expect after purchasing childcare management software?', answer: 'Reputable providers offer ongoing support, including regular updates and enhancements. Ensure your chosen software provider has a responsive customer support team and a commitment to continuous improvement.' },
    { question: 'How does childcare management software contribute to child development and learning?', answer: 'The software often includes features for lesson planning, tracking developmental milestones, and sharing progress with parents. This supports a holistic approach to child development and learning' },
    { question: 'What are the costs associated with implementing childcare management software?', answer: 'Costs can vary based on factors like the size of your childcare center and the features you need. Consider both upfront costs and ongoing subscription fees. Look for transparent pricing models and inquire about any hidden fees.' },
];

export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    return (
        <div className="mx-auto">
            <div className="sm:w-auto w-full">
                <section className="relative w-full">
                    <div className="bg-[url('/images/home/banner-bg.jpg')] bg-no-repeat bg-cover h-[881px]">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 ">
                                <div className="bg-none md:bg-[url('/images/home/planet2.png')] md:bg-no-repeat md:bg-right">
                                    <div className="bg-[url('/images/home/planet3.png')] bg-no-repeat bg-bottom left-32 top-[80px] text-white md:relative text-center md:text-left right-[72px]">
                                        <div className="bg-[url('/images/home/bg.png')] bg-cover bg-repeat p-6 rounded-md max-w-[900px]">
                                            <h1 className=" mb-2 sm:mt-10 mt-1 text-[clamp(1.5rem,1.7em,1rem)] font-sans">Best Childcare Management Software</h1>
                                            <h3 className="font-bold mb-2 sm:text-6xl text-4xl font-sans">Fueling Childcare Centers</h3>
                                            <p className="font-normal text-[clamp(1.5rem,1.7em,1rem)] mb-2  font-sans">Empower your childcare center with cutting-edge childcare management software, streamlining operations and enhancing child care quality for a seamless and efficient experience.</p>
                                            <Link href={'/requestdemo'}>
                                                <button className="w-[202px] h-[52px] bg-white rounded-full text-[#00008B] text-xl font-sans hover:bg-opacity-50 hover:text-white">Request Demo</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-none md:bg-[url('/images/home/planet4.png')] md:bg-no-repeat md:bg-right-top md:mt-4">
                                <Image
                                    src="/images/home/rocket.png"
                                    alt="rocket"
                                    className="w-[202px] sm:h-[500px] h-[400px] mx-auto md:mr-48 md:mt-10"
                                    width={202}
                                    height={500}
                                />
                            </div>
                        </div>
                        <Image
                            src="/images/home/cloud-design.png"
                            alt="home"
                            className="absolute w-full object-cover opacity-50 top-[840px] md:top-[440px]"
                            width={2109} height={183.95}
                        />
                        <div className="bg-[url('/images/home/cloud-design-1.png')] md:h-[550px]  w-full md:w-full md:relative relative bg-cover bg-center -top-[150px] md:-top-16 flex flex-col justify-center items-center md:pb-[100px]">
                            <h2 className="text-xl sm:text-4xl text-black font-bold font-sans text-center mb-4 mt-16 sm:mt-0 ">Why choose Kidpro Chidcare Management software</h2>
                            <p className="text-[#426666] font-normal text-center mb-8 font-sans sm:mb-12">Embrace efficiency, simplify management, and nurture growth with our childcare management software.</p>
                        </div>
                    </div>
                </section>
                <section className="relative bg-white sm:h-[350px] flex items-center justify-center top-48 sm:top-0 pb-[180px] ">
                    <div className="grid sm:grid-cols-2 gap-4 items-center sm:m-0 m-5">
                        {data.map((item, index) => (
                            <div key={index} className={` bg-white shadow-xl rounded-2xl sm:w-[597.67px] sm:h-[182px] ml-0 sm:ml-10 sm:p-12 p-2 border`}>
                                <div className="flex">
                                    <Image src={item.image} alt="home" className="text-center w-[75px] h-[75px] pt-2" width={80} height={80} />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-semibold font-sans">{item.title}</h3>
                                        <p className="text-sm font-sans pt-2">{item.description}</p>
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
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div> */}
                </section>
                <section className="bg-gradient-to-b from-blue-200 to-white  sm:h-[680px] items-center justify-center relative top-0  sm:top-0">
                    <div className="sm:flex flex-wrap justify-center items-center mb-10 sm:mb-4">
                        <div className="sm:flex-1 m-2 sm:p-4 sm:h-[130px] text-center sm:text-left">
                            <div className="sm:flex justify-center items-center">
                                <div className="ml-0 sm:ml-[98px]">
                                    <h2 className="font-bold ml-0 text-2xl font-sans pt-4">Your complete preschool & <br className="hidden sm:block" />childcare software system.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 sm:m-2 sm:p-4 sm:h-[130px]">
                            <div className="flex items-center">
                                <div className="ml-[30px]">
                                    <p className="text-[#6B7094] p-4 text-xl font-sans w-11/12 sm:w-7/12">Stay compliant with digital check-in, health checks,
                                        and room ratio tracking and run reports quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HorizontalList data={list} />
                    <div className="flex flex-col items-center mr-5 md:flex-row relative ml-4 justify-center mt-10 space-y-4 md:space-y-0 md:space-x-5">
                        {softwareImages.map((item, index) => (
                            <div
                                key={index}
                                className={`w-full md:w-[394px] h-[300px] md:m-0  relative bg-white p-5 rounded-md shadow-xl`}
                            >
                                <Image
                                    src={item.imageSrc} alt={`blog_banner_${index}`}
                                    className="rounded-lg w-[70px] h-[60px] p-2"
                                    width={70}
                                    height={60}
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-5 text-white">
                                    <h3 className="font-bold text-xl text-black z-10 md:top-[50%] mt-6 font-sans pt-5">{item.title}</h3>
                                    <p className="font-normal text-sm text-[#6B7094] z-10 font-sans pt-5">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" flex-1 flex items-center justify-center mt-10">
                        <button className="flex w-[190px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl sm:ml-2 pl-5 p-3 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Read more
                            <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                        </button>
                    </div>
                </section >
                <section className="bg-white flex flex-col sm:flex-row p-10 gap-10">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <p className="font-normal text-gray-500 opacity-50 mt-8 md:mt-0 font-sans">Center Management</p>
                        <h2 className="text-3xl sm:text-4xl font-bold font-sans">
                            Unlock seamless Childcare Management with KidsPro: Watch our Demo!
                        </h2>
                        <h5 className="w-full">
                            <p className="text-left text-lg font-normal leading-9 max-sm:text-justify font-sans">
                                Experience the power of KidsPro&apos;s comprehensive
                                childcare management software in action. Streamline operations,enhance communication, and create a nurturing environment– all in one place.
                                Click below for an exclusive video walkthrough.
                            </p>
                        </h5>
                        <div className="flex justify-center items-center sm:justify-start sm:items-start">
                            <Link href={'/requestdemo'}>
                                <button className=" flex items-center justify-center w-[200px] h-[52px] bg-[#1747C8] rounded-full text-white text-xl p-3 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Request Demo
                                    <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-1" width={32} height={32} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={"/images/home/tech.jpeg"}
                            alt="Image"
                            className="object-contain w-full"
                            width={669}
                            height={352}
                        />
                    </div>
                </section>
                <section className="relative bg-white p-5">
                    <p className="font-bold text-center text-3xl font-sans">Who uses our <br className="hidden sm:block" />Childcare Management Software?</p>
                    <div className="flex justify-center items-center p-4">
                        <p className="font-normal text-text-[#6B7094] text-center font-sans mb-8 w-11/12 sm:w-6/12">Discover why childcare centers, preschools, and early learning professionals rely on our software to elevate their operations and enhance the childcare experience.</p>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            {categories.map((category, index) => (
                                <div key={index} className={`sm:w-[370px] w-[280px] h-auto shadow sm:flex-shrink-0`}>
                                    <Image src={category.imageSrc} alt={category.alt} className="object-fit" width={383.96} height={263.23} />
                                    <div className="">
                                        <h3 className="font-bold font-sans pl-0 p-6">{category.title}</h3>
                                        <p className="font-normal font-sans pl-0 pb-6">{category.description}</p>
                                        <a className="text-[#1747C8] mt-2 md:mt-4 font-sans">Read more&gt;&gt;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <MobileApp />
                {/* <section className="relative bg-gradient-to-br from-[#1D64F0] via-white to-[#1D64F0]">
                    <div className="w-11/12 md:w-2/3 lg:w-65% mx-auto h-auto relative">
                        <div className="hidden sm:block">
                            <div className="pt-44 pl-56 pb-10 ml-[10px] p-4 sm:p-8 md:p-12 lg:p-16">
                                <div className="flex">
                                    <Image
                                        src="/images/home/quotes.png" alt="quotes"
                                        className="w-[168px] h-[168px]"
                                        width={168}
                                        height={168}
                                    />
                                    <div>
                                        <h2 className="font-bold text-4xl text-center mb-10 font-sans">Happy Clients</h2>
                                        <p className="font-normal text-center text-2xl text-[#4C4C4C] ml-[50px] font-sans">Thriving with KidsPro: Our Happy Clients Speak! Join the league of satisfied preschools revolutionizing childcare management. Discover joy in efficiency, simplicity, and excellence with KidsPro.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="m-10">
                                    <Image
                                        src="/images/home/f-logo.png" alt="logo"
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
                                    <h3 className="font-bold pb-2 ml-16 font-sans">Rowhan Smith</h3>
                                    <div className="flex">
                                        <p className="text-[#4C4C4C] ml-16 font-sans">Parent</p>
                                    </div>
                                </div>
                                <Image
                                    src="/images/home/image.png" alt="image"
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
                                        src="/images/home/quotes.png" alt="quotes"
                                        className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0"
                                        width={24}
                                        height={24}
                                    />
                                    <div className="mt-4 sm:mt-0 sm:ml-4 md:ml-8 lg:ml-12">
                                        <h2 className="font-bold text-2xl sm:text-4xl text-center sm:text-left mb-4 font-sans">Happy Clients</h2>
                                        <p className="font-normal text-center sm:text-left text-lg sm:text-2xl text-[#4C4C4C] font-sans">
                                            Thriving with KidsPro: Our Happy Clients Speak! Join the league of satisfied preschools revolutionizing childcare management. Discover joy in efficiency, simplicity, and excellence with KidsPro.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src="/images/home/image.png" alt="image"
                                        className="w-[200px] h-[200px] mt-8 mb-10"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex">
                                    <div className="mt-16 pr-8">
                                        <button className="w-7 h-7 border-black border-radius-2 bg-white">&lt;</button>
                                    </div>
                                    <p className="font-normal text-sm sm:text-lg text-[#4C4C4C] pb-2 font-sans w-11/12 sm:w-6/12">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident.Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident.
                                    </p>
                                    <div className="mt-16 pl-8">
                                        <button className="w-7 h-7 border-black border-radius-2 bg-white">&gt;</button>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-8 flex ">
                                    <Image
                                        src="/images/home/f-logo.png" alt="logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 mr-4 "
                                        width={16}
                                        height={16}
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg sm:text-xl pb-1 font-sans">Rowhan Smith</h3>
                                        <p className="text-[#4C4C4C] text-sm sm:text-base font-sans">Parent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="relative ">
                    <div className="flex justify-evenly sm:p-16 p-2 bg-white">
                        <div className="hidden sm:block">
                            <h2 className="font-bold text-2xl font-sans">Featured Post</h2>
                            <Image
                                src="/images/home/childrens.jpeg" alt="image"
                                className="w-[669px] h-[352px] mr-4"
                                width={669}
                                height={352}
                            />
                            <h4 className="font-normal text-base sm:text-xl  mt-8 font-sans">By John Doe May 23, 2022 </h4>
                            <p className="font-bold mt-2 line-clamp-3 text-sm sm:text-base  mt-5 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <p className="font-normal text-base text-normal  mt-2 font-sans">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br className="hidden sm:block" />eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br className="hidden sm:block" /> proident.Duis aute irure dolor in reprehenderit in voluptate velit esse<br className="hidden sm:block" /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat<br className="hidden sm:block" /> non proident.</p>
                            <div className=" mt-5 ">
                                <button className="flex w-[190px] h-[40px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-1 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Read more
                                    <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <h2 className="font-bold text-xl sm:text-2xl font-sans ml-4">All Post</h2>
                                <Link href="/" className="text-[#1747C8] text-base ml-[100px] sm:ml-[320px] underline font-sans">
                                    View more
                                </Link>
                            </div>
                            {allPost.map((item, index) => (
                                <div key={index}
                                    className={`mt-5 w-full sm:w-[500px] h-[150px] cursor-pointer ${(hoveredIndex === index || clickedIndex === index) && 'bg-[#EFF4FD]'
                                        }`}
                                    onClick={() => setClickedIndex(index)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <h3 className="p-5 font-normal text-base sm:text-xl font-sans">By {item.title} {item.date}</h3>
                                    <p className="pl-5 font-bold mt-2 line-clamp-3 text-sm sm:text-base sm:line-clamp-none font-sans">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <div className="bg-gradient-to-b from-blue-200 to-white w-full md:w-full h-full md:h-[873px] p-8 md:p-32 ">
                        <div className="flex justify-center items-center ">
                            <p className="font-normal text-[#6B7094] font-sans">FREQUENTLY ASKED QUESTIONS</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold sm:text-4xl text-2xl mt-2 font-sans">Frequently Asked Questions</h2>
                        </div>

                        <div className="md:flex md:justify-center md:gap-56 mt-8">
                            <div className="md:ml-16">
                                <FAQ numberOfQuestions={10} useGridCols2={true} faqData={faqDataHome} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative flex items-center justify-center w-full min-h-[322px] bg-gradient-to-b from-blue-800 to-blue-100">
                    <div className="p-4 sm:p-8">
                        <h2 className="text-center font-bold text-2xl sm:text-3xl text-white font-sans">Subscribe to our newsletter</h2>
                        <div className="flex items-center justify-center">
                            <p className="text-center font-normal text-white m-4 font-sans text-xl w-11/12 sm:w-7/12">Get expert tips on childcare management, regulations & parent engagement in KidPro&lsquo;s newsletter.</p>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="flex w-[280px] rounded-lg bg-white">
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
                    </div>
                </section>
                <section className="relative flex flex-col items-center justify-center w-full bg-white p-8">
                    <h3 className="font-bold text-center text-2xl sm:text-5xl mt-3 font-sans">Ready to get started?</h3>
                    <p className="text-[#6B7094] opacity-50 text-center font-bold mt-3 sm:mt-5 text-sm sm:text-base font-sans">Ready to transform your childcare experience? Get started with KidsPro today. Streamline operations,<br /> enhance communication, and create a nurturing environment for young minds to thrive!</p>
                    {/* <p className="font-bold text-center mt-4 sm:mt-5 text-sm sm:text-base font-sans">Rated 4.9/5 from over 600 reviews.</p> */}

                    {/* <div className="flex items-center mt-3 sm:mt-6">
                        <hr className="w-16 sm:w-32" />
                        <span className="mx-2 font-sans">Or</span>
                        <hr className="w-16 sm:w-32" />
                    </div> */}
                    <div className="mt-4 sm:mt-4 flex items-center justify-center">
                        <Link href={'/requestdemo'}>
                            <button className="flex w-full max-w-[220px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl sm:ml-2 pl-3 sm:pl-5 p-3 font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                Request Demo
                                <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-[5px] ml-3" width={30} height={30} />
                            </button>
                        </Link>
                    </div>
                    <span className="text-xl font-bold font-sans mt-4 text-center">Download our app</span>
                    <Image
                        src="/images/home/playstore-pic.png" alt="image"
                        className="w-full max-w-[500px] h-[130px] sm:ml-0 sm:mr-0"
                        width={474} height={135}
                    />
                </section>
                <Footer />
            </div >
        </div >
    )
}