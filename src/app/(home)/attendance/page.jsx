/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import BlogUserCards from "@/components/BlogUserCard";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import Link from "next/link";

const integrations = [
    {
        image: "/images/attendance/checkin.png",
        alt: "Contactless check-in",
        title: "Contactless check-in",
        description: "Work faster and smarter by integrating directly with Notion, right in the app."
    },
    {
        image: "/images/attendance/medicalforms.png",
        alt: "Medical forms",
        title: "Medical forms",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/recordcheckins.png",
        alt: "Record late check-ins",
        title: "Record late check-ins",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/pickups.png",
        alt: "Authorise pick-ups",
        title: "Authorise pick-ups",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/paperless.png",
        alt: "Go paperless",
        title: "Go paperless",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/classroomratios.png",
        alt: "Classroom Ratios",
        title: "Classroom Ratios",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/tempreature.png",
        alt: "Record Temperature",
        title: "Record Temperature",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    },
    {
        image: "/images/attendance/billing.png",
        alt: "Attendance Based Billing",
        title: "Attendance Based Billing",
        description: "Work faster and smarter by integrating directly with Slack, right in the app."
    }
];
const features = [
    {
        title: "Communication",
        image: "/images/attendance/communication.png",
        alt: "communication",
        description: "Foster strong connections with families and staff. Ninety-five percent of administrators and staff have reported that KidPro enhances communication with families.",
        buttonText: "Explore",
    },
    {
        title: "Billing & Payments",
        image: "/images/attendance/billing-payments.png",
        alt: "billing-payments",
        description: "Automate invoicing, accept online payments, and ensure timely payments. 90% of preschools see improved payment timeliness with KidPro.",
        buttonText: "Explore",
    },
    {
        title: "Center Management",
        image: "/images/attendance/center-mgt.png",
        alt: "center-mgt",
        description: "Make administrative tasks easier with KidPro's all-in-one app and save up to 20 hours every month.",
        buttonText: "Explore",
    }
]

const Attendance = () => {
    const { data: blogData } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    return (
        <div>
            <section className="relative bg-[#E9F0FF]">
                <div className="flex justify-center items center md:p-20 flex-col md:flex-row">
                    <div>
                        <h1 className="font-sans font-semibold text-6xl w-11/12 sm:w-9/12 text-[#42307D] tracking-tighter text-left p-8">Digital attendance app for preschools and daycare</h1>
                        <p className="font-sans text-[#2053CC] text-2xl w-11/12 sm:w-11/12 font-normal tracking-normal md:text-left pl-8">Give way to contactless check-in at your preschool or daycare with Illumine’s child care attendance software. </p>
                        <div className="p-8 hidden sm:block">
                            <button className="flex w-[220px] h-[50px] bg-white rounded-full text-[#1747C8] text-xl pl-3 sm:pl-5 p-2 font-sans">
                                Request Demo
                                <Image src="/images/attendance/arrow-right.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
                            </button>
                        </div>
                    </div>
                    <div className="relative top-18 rounded-8 p-8">
                        <video controls width={753} height={438}>
                            <source src="your-video-source-url.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="p-8 sm:hidden">
                        <button className="flex  font-sans items-center justify-center w-[343px] bg-white h-[48px]">
                            Request Demo
                        </button>
                    </div>
                </div>
            </section >
            <section className="relative p-12">
                <div className="flex items-center justify-center font-sans">
                    <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans">
                        Integration
                    </button>
                </div>
                <h1 className="text-center font-sans text-3xl font-semibold leading-11 tracking-tighter pt-4">A feature packed attendance software</h1>
                <p className="text-center text-base font-normal font-sans leading-7 pt-4 pb-2">Record attendance in real-time for both staff and students at a click of a button or QR code. Manage authorize pick-ups, record temperature, get real time classroom ratios and much more.</p>
                <>
                    <div className="flex flex-wrap">
                        {integrations.slice(0, 4).map((integrate, index) => (
                            <div key={index} className="p-4 w-1/2 sm:w-1/4">
                                <img
                                    src={integrate.image}
                                    alt={integrate.alt}
                                    className="mx-auto"
                                />
                                <h1 className="text-center text-xl font-semibold leading-9 font-sans">{integrate.title}</h1>
                                <p className="text-center text-base leading-6 font-normal font-sans">{integrate.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap mt-8">
                        {integrations.slice(4).map((integrate, index) => (
                            <div key={index} className="p-4 w-1/2 sm:w-1/4 hidden sm:block">
                                <img
                                    src={integrate.image}
                                    alt={integrate.alt}
                                    className="mx-auto"
                                />
                                <h1 className="text-center text-xl font-semibold leading-9 font-sans">{integrate.title}</h1>
                                <p className="text-center text-base leading-6 font-normal font-sans">{integrate.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            </section>
            <section className="relative">
                <div className="flex justify-center items-center">
                    <h1 className="text-center text-4xl font-semibold leading-11 tracking-tighter font-sans">Adopt a faster and more efficient <br /> way of marking attendance</h1>
                </div>
                <div class="flex justify-center items-center p-6">
                    <div class="flex flex-col sm:flex-row gap-8">
                        <div class="card bg-[#7F56D9] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/costeffective.png" alt="cost-effective" />
                                <h1 class="font-bold font-sans text-2xl p-4">Cost-effective</h1>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white">
                                <p class="font-medium font-sans">Digitize your attendance process and save money on paper, stationary, and resources.</p>
                            </div>
                        </div>
                        <div class="hidden sm:block card bg-[#079455] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/savetime.png" alt="save-time" />
                                <h1 class="font-bold text-2xl p-4 font-sans">Save time</h1>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white mt-64">
                                <p class="font-medium font-sans">Fasten the check-in/check-out at your center process with our digital attendance platform.</p>
                            </div>
                        </div>
                        <div class="hidden sm:block card bg-[#1570EF] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/accuracy.png" alt="improve-accuracy" />
                                <h1 class="font-bold text-2xl p-4 font-sans">Improve accuracy</h1>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white mt-64">
                                <p class="font-medium font-sans">Reduce the risk of any human errors being caused while recording attendance.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-10">
                        <h1 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Safe and secure attendance process</h1>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">Illumine smoothens all the attendance, pick-up, and drop-off-related process for you. Features such as designated pick-ups, customisable medical forms, and temperature recording enable you to handle everything from one place.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="p-4 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Automated notifications</h1>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">Parents get automated alerts every time their child checks in or checks out from the school. So you never have to worry about their peace of mind.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Ensure safety</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Configure medical forms and log-in temperatures to reduce the risk of infections and assure the safety of everyone on the premises.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Designated pick-ups</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Give parents and teachers peace of mind by authorising and streamlining student pick-ups with our attendance app.</p>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/images/attendance/attendance-process.png"
                                alt="attendance-process"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-5">
                        <h1 className="font-sans sm:text-3xl text-xl font-semibold leading-44 tracking-tighter text-left">Simplify attendance management</h1>
                        <p className="font-sans sm:text-base text-sm font-normal leading-30 tracking-normal text-left pt-5">Say goodbye to the  attendance sheets and speed up your attendance marking process with Illumine’s digital attendance app. Everything you need to streamline your processes – available to you in one place.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div>
                            <img
                                src="/images/attendance/attendance-mgt.png"
                                alt="attendance-mgt"
                            />
                        </div>
                        <div className="p-8">
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Contactless check-in</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Go paperless and save time with our attendance app by streamlining check-in and check-out processes at your preschool.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Student and staff attendance</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Students and staff can be checked in manually/ by entering the kiosk code or by scanning the school's QR code.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Record late check-ins</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">The attendance app automatically records and displays late check-ins for you. Manage and monitor late attendance easily with our platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-5">
                        <h1 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Gear up you childcare for the digital age</h1>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">Illumine smoothens all the attendance, pick-up, and drop-off-related process for you. Features such as designated pick-ups, customisable medical forms, and temperature recording enable you to handle everything from one place.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="p-4 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Authorise pick-up</h1>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">The app gives parents the option of designating the guardians who will pick up or drop off their children.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Medical forms</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">The app lets you customise and configure medical forms for the parents to record temperature, medical declarations, allergy records, etc.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h1 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Temperature checks</h1>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Illumine gives you an option to record the students' temperatures while check-in and check-out times. Ensure the kids' safety and get prepared to run your business under new circumstances with the attendance software.</p>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/images/attendance/digital-age.png"
                                alt="childcare"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="flex items-center justify-center">
                    <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans">
                        Features
                    </button>
                </div>
                <h1 className="text-center font-sans text-2xl font-semibold leading-11 tracking-tighter pt-4">Our Features and Services</h1>
                <div className="grid place-content-center p-5">
                    <div className="grid sm:grid-cols-3 grid-cols-1 w-full border-gray-300 sm:m-5">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col justify-evenly items-center h-[555px] w-[384px] shadow-xl sm:p-4">
                                <h2 className="font-sans text-2xl font-semibold leading-7 text-center text-[#475467]">{feature.title}</h2>
                                <img src={feature.image} alt={feature.alt} className="mx-auto mb-4" />
                                <p className="font-sans text-base font-normal leading-6 text-center">{feature.description}</p>
                                <div className="mt-10">
                                    <button className="flex bg-[#1747C8] text-white w-[320px] h-[48px] rounded-lg  items-center justify-center font-sans">
                                        {feature.buttonText}
                                        <img src="/images/attendance/arrow.png" className="ml-2" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h1 className="font-bold text-center text-4xl font-sans">
                        Frequently asked questions
                    </h1>
                    <div className="flex justify-center items-center">
                        <FAQ numberOfQuestions={4} useGridCols2={false} />
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="bg-gradient-to-b from-blue-200 to-white p-10">
                    <>
                        <div className="w-full flex justify-center text-[#1747C8]">
                            <h1 className="w-10/12 sm:w-6/12 font-sans text-4xl font-semibold text-center p-8">Come join KidPro and be part of a thriving community of educators and families!</h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center justify-center bg-[#1747C8] text-white w-[320px] h-[48px] rounded-lg font-sans">
                                <img src="/images/attendance/play-icon.png" className="p-2" alt="play" />
                                Request Demo
                            </button>
                        </div>
                    </>
                    <div className="sm:p-10 sm:m-8">
                        <div className="flex items-center justify-center">
                            <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans">
                                Our Blog
                            </button>
                        </div>
                        <h1 className="font-sans text-3xl font-semibold text-center p-4">Featured Post</h1>
                        <div className="grid place-content-center">
                            <div className="sm:flex justify-evenly items-center text-left">
                                {blogs.slice(0, 3).map((blog, index) => (
                                    <div
                                        key={index}
                                        className={`mb-4  ${index % 2 === 0}`}
                                    >
                                        <Link href={`/blogs/${blog._id}`}>
                                            <BlogUserCards
                                                key={blog.id}
                                                blog={blog}
                                                useInDateFeatured
                                                useInImg
                                                useInNameFeatured
                                                useInSummary
                                                useInCategoryFeatured
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer />
        </div >
    )
}
export default Attendance;