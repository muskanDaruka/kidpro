/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "../../../components/Footer";
import Image from "next/image";
import FAQ from "../../../components/FAQ";
import BlogUserCards from "../../../components/BlogUserCard";
import { useAllBlogs } from "../../../hooks/blogs.hooks";
import Link from "next/link";

const integrations = [
    {
        image: "/images/communication/messages.png",
        alt: "Individual Messaging",
        title: "Individual Messaging",
        description: "By cultivating personalized communication, our parents communication app empowers you to create stronger relationships with parents and provide the best possible care for each child."
    },
    {
        image: "/images/communication/communication.png",
        alt: "Easy Communication",
        title: "Easy Communication",
        description: "By cultivating a centralized and streamlined communication system, you can establish a more connected and efficient environment for everyone involved. This empowers you to focus on your true passion."
    },
    {
        image: "/images/communication/broadcast.png",
        alt: "Broadcast Messages",
        title: "Broadcast Messages",
        description: "Stay connected with parents! Send important announcements directly to all of them simultaneously through a secure platform.Tackle the challenge of keeping parents informed with broadcast messaging."
    },
    {
        image: "/images/communication/newspaper.png",
        alt: "Daily Reports",
        title: "Daily Reports",
        description: "Build trust and keep parents connected with their child's day-to-day experiences through easy-to-use daily reports. Our childcare communication app empowers you to create detailed daily reports that provide parents with a glimpse into their child's day."
    },
    {
        image: "/images/communication/events.png",
        alt: "Event Updates",
        title: "Event Updates",
        description: "Imagine a system that allows you to easily share information about upcoming events at your childcare center. Effectively provide clear details about the events, nurturing a sense of community and engagement."
    },
    {
        image: "/images/communication/alert.png",
        alt: "Notification / Alert",
        title: "Notifications & Alerts",
        description: "Our system tackles this challenge by providing a centralized platform for sending timely notifications and alerts. This allows you to keep parents and staff informed about important information instantly, cultivating a more connected environment."
    },

];
const features = [
    {
        title: "Digital Attendance",
        image: "/images/communication/attendance.png",
        alt: "Digital Attendance",
        description: "By offering a streamlined digital attendance system, we empower you to simplify record-keeping, save time, and create a more efficient environment for everyone involved in your childcare center.",
        buttonText: "Explore",
    },
    {
        title: "Enrollment",
        image: "/images/communication/enrollment.png",
        alt: "enrollment",
        description: "A smooth enrollment process promotes a positive first impression for parents, while reducing stress for staff. This sets the stage for a positive and collaborative relationship from the very beginning.",
        buttonText: "Explore",
    },
    {
        title: "Instant Reporting",
        image: "/images/attendance/center-mgt.png",
        alt: "instant reporting",
        description: "Share personalized reports with parents, fostering trust and transparency by keeping them informed about their child's development within the center's enriching environment.",
        buttonText: "Explore",
    }
]
const faqDataAttendance = [
    { question: "What communication features does the software offer for childcare centers?", answer: "The software provides various communication tools, including messaging, daily reports, event updates, and notification alerts, to keep childcare centers connected with parents and staff." },
    { question: "What features should I look for in a childcare communication app?", answer: "Look for features that address your specific needs. Essential features include secure messaging, photo and video sharing capabilities, daily reports or updates, and event notifications. Consider additional features like multilingual support, parent engagement tracking, and calendar integration." },
    { question: "Can childcare centers customize communication settings to suit their needs?", answer: "Yes, childcare centers can tailor communication settings, such as notification preferences and message templates, to align with their communication policies and requirements." },
    { question: "How does the software ensure data security and privacy?", answer: "Data security and privacy are prioritized through robust encryption measures and strict access controls, ensuring that sensitive information remains protected at all times." },
    { question: "Can childcare centers track parent engagement and communication history within the software?", answer: "Yes, the platform includes features to track parent engagement metrics and communication history, providing insights into parent involvement and interaction with the childcare center." },
    { question: "How can improved communication benefit my childcare center?", answer: "Strong communication fosters trust and transparency with parents, leading to increased satisfaction and potentially higher enrollment rates.  Effective communication also streamlines daily operations, saves staff time, and allows for better collaboration between teachers and parents, ultimately benefiting the children in your care." },
    { question: "How does the software streamline administrative tasks related to communication for childcare centers?", answer: "Administrative tasks such as sending reminders, generating reports, and managing communication logs are automated, saving childcare centers time and effort in managing communication processes." },
    { question: "Can childcare centers access the platform remotely to stay updated on communication activities?", answer: "Yes, the platform is accessible remotely from any device with an internet connection, allowing child care centers to stay updated on communication activities and respond to messages even when they're away from the center." },
    { question: "Is training and support available for child care center staff to use the communication features effectively?", answer: "Comprehensive training and ongoing support are provided to ensure that childcare center staff are proficient in using the communication features of the software, maximizing their effectiveness." },
    { question: "How can I ensure a smooth transition to a new childcare communication app?", answer: "Choose an app that offers user-friendly interfaces for both staff and parents.  Provide comprehensive training for your staff and consider offering resources or tutorials for parents to familiarize them with the app's functionalities." },
];

const Communication = () => {
    const { data: blogData } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    return (
        <div className="relative w-full">
            <section className="relative bg-[#E9F0FF]">
                <div className="flex justify-center items-center sm:p-16 flex-col md:flex-row">
                    <div>
                        <h1 className="font-sans font-semibold sm:text-5xl text-4xl w-11/12 sm:w-9/12 text-[#42307D] tracking-tighter p-8 text-center sm:text-left">Simplify Communication: A Powerful Childcare Parents Communication App</h1>
                        <p className="font-sans text-[#2053CC] text-2xl w-11/12 sm:w-10/12 font-normal tracking-normal md:text-left pl-8">Our childcare communication app empowers you to effortlessly connect with parents, keeping them informed and engaged. </p>
                        <div className="p-8 hidden sm:block">
                            <Link href={"/requestdemo"}>
                                <button className="flex w-[220px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl pl-3 sm:pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                    Request Demo
                                    <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative items-center flex sm:p-0 p-4">
                        <video controls width={753} height={438} className="rounded-lg">
                            <source src="movie.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="p-2 sm:hidden">
                        <Link href={"/requestdemo"}>
                            <button className="flex  font-sans items-center justify-center w-[300px] bg-[#1747C8] text-white h-[48px] rounded-lg">
                                Request Demo
                                <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
            <section className="relative sm:p-12">
                <div className="flex items-center justify-center font-sans">
                    <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans sm:pt-0 mt-2">
                        Integration
                    </button>
                </div>
                <h3 className="text-center font-sans text-3xl font-semibold leading-11 tracking-tighter pt-4">Dive into Feature-Rich Childcare Communication</h3>
                <div className="flex justify-center items-center">
                    <p className="text-center text-base font-normal font-sans leading-7 pt-4 pb-2 w-10/12">Say goodbye to endless phone calls and scattered updates. Our childcare communication app keeps parents informed and engaged with daily reports, developmental insights, and a secure platform for two-way communication. This fosters transparency and builds trust, allowing you to focus on what matters most - providing exceptional care for the children.</p>
                </div>
                <>
                    <div className="flex flex-wrap sm:p-8">
                        {integrations.slice(0, 3).map((integrate, index) => (
                            <div key={index} className="p-4 sm:w-1/3">
                                <img
                                    src={integrate.image}
                                    alt={integrate.alt}
                                    className="mx-auto"
                                />
                                <h4 className="text-center text-xl font-semibold leading-9 font-sans pt-2">{integrate.title}</h4>
                                <div className="flex items-center justify-center p-2">
                                    <p className="text-center text-base leading-6 font-normal font-sans w-11/12 sm:w-8/12">{integrate.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap sm:mt-8">
                        {integrations.slice(3).map((integrate, index) => (
                            <div key={index} className="p-4 sm:w-1/3">
                                <img
                                    src={integrate.image}
                                    alt={integrate.alt}
                                    className="mx-auto"
                                />
                                <h4 className="text-center text-xl font-semibold leading-9 font-sans pt-2">{integrate.title}</h4>
                                <div className="flex items-center justify-center p-2">
                                    <p className="text-center text-base leading-6 font-normal font-sans w-11/12 sm:w-8/12">{integrate.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            </section>
            <section className="relative">
                <div className="flex justify-center items-center">
                    <h2 className="text-center sm:text-4xl text-3xl font-semibold leading-11 tracking-tighter font-sans w-11/12 sm:w-6/12">Ready to Transform Your Parent Communication</h2>
                </div>
                <div class="flex justify-center items-center p-6">
                    <div class="flex flex-col sm:flex-row gap-8">
                        <div class="card bg-[#7F56D9] text-white sm:w-[384px] w-[300px] h-[520px] p-6 grid grid-cols-1 gap-38">
                            <div class="flex items-center">
                                <img src="/images/attendance/costeffective.png" alt="cost-effective" />
                                <h2 class="font-bold font-sans sm:text-2xl text-xl p-4"> Effortless Updates for Informed Parents</h2>
                            </div>
                            <div class="flex items-center justicy-center p-3 border border-solid bg-opacity-30 bg-white">
                                <p class="font-medium font-sans">A global study by the National Center for Education Statistics (NCES) in the US found that over 80% of parents consider communication with childcare providers to be "very important."  Our software empowers childcare centers worldwide to meet this growing need for real-time updates and information sharing.</p>
                            </div>
                        </div>
                        <div class="card bg-[#079455] text-white sm:w-[384px] w-[300px] h-[520px] p-6 grid grid-cols-1 gap-38">
                            <div class="flex items-center">
                                <img src="/images/attendance/savetime.png" alt="save-time" />
                                <h2 class="font-bold sm:text-2xl text-xl p-4 font-sans">Streamlined Communication for Engaged Families</h2>
                            </div>
                            <div class="flex items-center justicy-center p-3 border border-solid bg-opacity-30 bg-white ">
                                <p class="font-medium font-sans">A report by the Organisation for Economic Co-operation and Development (OECD) emphasizes the importance of collaboration between parents and childcare providers. Our platform facilitates two-way communication, aligning with this international focus on fostering strong relationships between parents and childcare staff globally.</p>
                            </div>
                        </div>
                        <div class="card bg-[#1570EF] text-white sm:w-[384px] w-[300px] h-[520px] p-6 grid grid-cols-1 gap-38">
                            <div class="flex items-center">
                                <img src="/images/attendance/accuracy.png" alt="improve-accuracy" />
                                <h2 class="font-bold sm:text-2xl text-xl p-4 font-sans">Clear Reminders for Involved Parents</h2>
                            </div>
                            <div class="flex items-center justicy-center p-3 border border-solid bg-opacity-30 bg-white ">
                                <p class="font-medium font-sans">Research by the UNESCO Early Childhood Care and Education (ECCE)  program highlights the importance of keeping parents informed about their child's learning experiences.  Our timely event notifications ensure parents worldwide can actively participate in their child's childcare journey, regardless of location.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link href={"/requestdemo"}>
                        <button className="flex w-[230px] h-[45px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Request Demo
                            <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                        </button>
                    </Link>
                </div>
            </section >
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-5">
                        <h2 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Empower Parent-Provider Connectivity</h2>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">Simplify communication with easy-to-use features, empowering caregivers to share updates and address concerns.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="sm:hidden">
                            <img
                                src="/images/attendance/attendance-process.png"
                                alt="attendance-process"
                            />
                        </div>
                        <div className="p-5 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12 mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Personal Conversations</h4>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">Enable personalized communication for a richer experience at your childcare center. Caregivers can tailor updates and address individual concerns, strengthening the connection between parents and your center.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Streamlined Engagement</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Streamline communication within your childcare center with seamless features that simplify interaction between parents and caregivers. This allows for effortless exchange of updates, questions, and concerns, fostering a more connected environment for all.</p>
                            </div>
                            {/* <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">High ROI</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Experience a high return on investment as you streamline operations and enhance productivity with our affordable software solution.</p>
                            </div> */}
                        </div>
                        <div className="sm:block hidden">
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
                        <h2 className="font-sans sm:text-3xl text-xl font-semibold leading-44 tracking-tighter text-left">Communication Broadcast</h2>
                        <p className="font-sans sm:text-base text-sm font-normal leading-30 tracking-normal text-left pt-5">Keep parents in the loop effortlessly! Send announcements, daily updates, and reminders – all with a click through our user-friendly communication tool.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div>
                            <img
                                src="/images/attendance/attendance-mgt.png"
                                alt="attendance-mgt"
                            />
                        </div>
                        <div className="sm:p-8 p-2">
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 w-full h-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Send out mass messages</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Utilize the broadcast messages feature to efficiently distribute messages to multiple recipients simultaneously, facilitating streamlined communication and enabling timely dissemination of important information to a large audience.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Timely Notification</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Keeping everyone informed is crucial, and sometimes things need immediate attention. Our notification and alert system ensures critical information reaches the right people instantly.</p>
                            </div>
                            {/* <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Record late check-ins</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">The attendance app automatically records and displays late check-ins for you. Manage and monitor late attendance easily with our platform.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-5">
                        <h2 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Daily Insights and Updates</h2>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">Gain valuable insights! Get daily activity summaries and upcoming schedules, empowering informed decisions for each child's experience.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="sm:hidden">
                            <img
                                src="/images/attendance/digital-age.png"
                                alt="childcare"
                            />
                        </div>
                        <div className="p-4 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12 mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Day-to-day summaries</h4>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">Keeping track of each child's day-to-day activities can be a challenge. Our software simplifies this process with automatic daily reports, providing a comprehensive overview of each child's experience.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full mt-2">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Activity Schedules</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Clear communication about activities creates a sense of anticipation and excitement for the parents and children. They can look forward to their favorite parts of the day and feel more engaged throughout the entire experience.</p>
                            </div>
                            {/* <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full mt-2">
                                <div className="flex sm:pt-3">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3 ">Empowering Your Team</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Our user-friendly software is easy to learn, even for those not tech-savvy. This empowers your staff and helps them work more efficiently.</p>
                            </div> */}
                        </div>
                        <div className="sm:block hidden">
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
                <h3 className="text-center font-sans text-2xl font-semibold leading-11 tracking-tighter pt-4">Discover our Powerful Features</h3>
                <div className="grid place-content-center sm:p-5">
                    <div className="grid sm:grid-cols-3 grid-cols-1 w-full border-gray-300 sm:m-5">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col justify-evenly items-center h-[555px] sm:w-[384px] w-[300px] shadow-xl p-4 m-2 border">
                                <h2 className="font-sans text-2xl font-semibold leading-7 text-center text-[#475467]">{feature.title}</h2>
                                <img src={feature.image} alt={feature.alt} className="mx-auto mb-4" />
                                <p className="font-sans text-base font-normal leading-6 text-center">{feature.description}</p>
                                <div className="mt-10">
                                    <button className="flex bg-[#1747C8] text-white w-[280px] h-[48px] rounded-lg  items-center justify-center font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                        {feature.buttonText}
                                        <img src="/images/attendance/arrow.png" className="ml-2" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center m-6">
                    <Link href={"/requestdemo"}>
                        <button className="flex w-[230px] h-[45px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Request Demo
                            <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                        </button>
                    </Link>
                </div>
            </section>
            <section className="relative">
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h2 className="font-bold text-center text-4xl font-sans">
                        Frequently asked questions
                    </h2>
                    <div className="flex justify-center items-center">
                        <FAQ numberOfQuestions={10} useGridCols2={false} faqData={faqDataAttendance} />
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="bg-gradient-to-b from-blue-200 to-white sm:p-10">
                    <>
                        <div className="w-full flex justify-center text-[#1747C8]">
                            <h2 className="w-10/12 sm:w-6/12 font-sans text-4xl font-semibold text-center p-8">Come join KidPro and be part of a thriving community of educators and families!</h2>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link href={"/requestdemo"}>
                                <button className="flex items-center justify-center bg-[#1747C8] text-white w-[250px] h-[48px] rounded-full font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                    Request Demo
                                    <img src="/images/home/arrow-right-white.png" className="p-2" alt="play" />
                                </button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-xl font-bold font-sans mt-4 text-center">Download our app</span>
                        </div >
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/home/playstore-pic.png" alt="image"
                                className="w-full max-w-[500px] h-[130px] sm:ml-0 sm:mr-0"
                                width={474} height={135}
                            />
                        </div>
                    </>
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
                    <div className="sm:p-10 m-8">
                        <div className="flex items-center justify-center">
                            <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans">
                                Our Blog
                            </button>
                        </div>
                        <h2 className="font-sans text-3xl font-semibold text-center p-4">Featured Post</h2>
                        <div className="grid place-content-center">
                            <div className="sm:flex justify-evenly items-evenly text-left">
                                {blogs.slice(-3).map((blog, index) => (
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
export default Communication;