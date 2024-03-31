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
        alt: "Multiple check-in",
        title: "Multiple check-in",
        description: "Multiple check-ins throughout the day keep parents informed and engaged, while freeing up teachers to focus on creating a fun and educational environment for the kids."
    },
    {
        image: "/images/attendance/recordcheckins.png",
        alt: "Record late check-ins",
        title: "Record late check-ins",
        description: "Easy to document tardy arrivals, keeping everything organized for both parents and staff. Late arrivals are automatically logged, streamlining attendance tracking."
    },
    {
        image: "/images/attendance/pickups.png",
        alt: "Authorise pick-ups",
        title: "Authorise pick-ups",
        description: "Handle authorized pick-ups safely using our childcare management software, creating a safe and efficient experience for both parents and authorized adults."
    },
    {
        image: "/images/attendance/paperless.png",
        alt: "Go paperless",
        title: "Go paperless",
        description: "Easily switch to a paperless system with our childcare digital attendance solution and reduce your carbon footprint while increasing your savings. Streamline operations, reduced environmental impact."
    },
    {
        image: "/images/attendance/classroomratios.png",
        alt: "Easy to report",
        title: "Easy to report on",
        description: "Take an intuitive, rapid approach to sign-ins. You can generate customized reports in seconds, allowing you to track trends and make informed decisions about your daycare."
    },

];
const features = [
    {
        title: "Communication",
        image: "/images/attendance/communication.png",
        alt: "communication",
        description: "Parents feel involved and informed, while staff can focus on what matters most – building relationships with the children. It's a win-win for everyone!",
        buttonText: "Explore",
    },
    {
        title: "Enrollment",
        image: "/images/attendance/billing-payments.png",
        alt: "enrollment",
        description: "No need to worry about long enrollment headaches at your childcare center! KidPro's Enrollment solution streamlines the entire process for both parents and administrators.",
        buttonText: "Explore",
    },
    {
        title: "Instant Reporting",
        image: "/images/attendance/center-mgt.png",
        alt: "instant reporting",
        description: "Teachers can use the software to create reports with observations and updates on each child's day, accessible to parents in real-time or with a slight delay.",
        buttonText: "Explore",
    }
]
const faqDataAttendance = [
    { question: "What is Kidpro's digital attendance tracking software?", answer: "Kidpro's attendance tracking software is a user-friendly system that helps childcare centers streamline the check-in/out process, track children in real-time, and generate accurate reports. It eliminates paper sign-in sheets and ensures efficient record-keeping." },
    {
        question: "How does attendance tracking benefit childcare centers?", answer: (
            <ul className="list-disc pl-5">
                <li>Saves Time :  Spend less time managing paperwork and more time on what matters most - the children.</li>
                <li>Improves Accuracy :  Eliminate errors with digital check-in/out and automated reports.</li>
                <li>Enhances Safety :  Gain real-time insights into who&apos;s present and easily identify discrepancies.</li>
                <li>Boosts Communication :  Keep parents informed with automated arrival/pick-up notifications (optional).</li>
            </ul>
        )
    },
    {
        question: "What features does Kidpro's attendance tracking software offer? ", answer: (
            <ul className="list-disc pl-5">
                <li>Secure sign-in/out methods ( contactless options).</li>
                <li>Real-time attendance tracking.</li>
                <li>Automated reports for easy data analysis.</li>
                <li>Customizable notification settings for parents and staff.</li>
                <li>Secure data storage with industry-standard encryption.</li>
            </ul>
        )
    },
    { question: "Is Kidpro's software easy to use?", answer: "Absolutely! Kidpro is designed with childcare staff in mind. The intuitive interface allows for effortless attendance recording, report access, and parent communication." },
    { question: "How does Kidpro ensure data security?", answer: "Kidpro prioritizes data security. We utilize industry-leading practices like encryption, access controls, and regular backups to safeguard sensitive information." },
    { question: "Can parents access their child's attendance records?", answer: "Yes, in most cases. Parents can typically access a secure online portal or mobile app to view their child's attendance information, allowing them to stay informed." },
    { question: "Is Kidpro customizable?", answer: "Yes! Kidpro understands that every childcare center is unique. Our software allows you to customize attendance policies, reporting formats, and notification settings to perfectly match your specific needs." },
    { question: "How can I get started with Kidpro?", answer: "Contact our Kidpro team today! We offer free demos to showcase how our attendance tracking software can revolutionize your childcare center's efficiency and peace of mind." },
];

const Attendance = () => {
    const { data: blogData } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    return (
        <div>
            <section className="relative bg-[#E9F0FF]">
                <div className="flex justify-center items-center sm:p-16 flex-col md:flex-row">
                    <div>
                        <h1 className="font-sans font-semibold sm:text-5xl text-4xl w-11/12 sm:w-9/12 text-[#42307D] tracking-tighter p-8 text-center sm:text-left">Digital attendance for childcares and preschools – No more sign-in sheets</h1>
                        <p className="font-sans text-[#2053CC] text-2xl w-11/12 sm:w-10/12 font-normal tracking-normal md:text-left pl-8">Keep Your childcare Running Smoother than Ever - Go Contactless with Kidpro’s DayCare Attendance Solution Today! </p>
                        <div className="p-8 hidden sm:block">
                            <button className="flex w-[220px] h-[50px] bg-[#1747C8] rounded-full text-white text-xl pl-3 sm:pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                Request Demo
                                <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
                            </button>
                        </div>
                    </div>
                    <div className="relative items-center flex sm:p-0 p-4">
                        <video controls width={753} height={438} className="rounded-lg">
                            <source src="movie.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="p-8 sm:hidden">
                        <button className="flex  font-sans items-center justify-center w-[343px] bg-[#1747C8] text-white h-[48px] rounded-lg">
                            Request Demo
                            <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-3" width={32} height={32} />
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
                <h3 className="text-center font-sans text-3xl font-semibold leading-11 tracking-tighter pt-4">What’s Included in Kidpro’s Attendance Tracking Package</h3>
                <p className="text-center text-base font-normal font-sans leading-7 pt-4 pb-2">Easily track attendance with a simple click, Manage authorized Pick-ups and Enjoy more Features at Fingertips.</p>
                <>
                    <div className="flex flex-wrap p-8">
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
                            <div key={index} className="p-4 sm:w-1/2">
                                <img
                                    src={integrate.image}
                                    alt={integrate.alt}
                                    className="mx-auto"
                                />
                                <h4 className="text-center text-xl font-semibold leading-9 font-sans pt-2">{integrate.title}</h4>
                                <div className="flex items-center justify-center p-2">
                                    <p className="text-center text-base leading-6 font-normal font-sans w-11/12 sm:w-6/12">{integrate.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            </section>
            <section className="relative">
                <div className="flex justify-center items-center">
                    <h2 className="text-center sm:text-4xl text-3xl font-semibold leading-11 tracking-tighter font-sans w-11/12 sm:w-6/12">Ready to Ditch the Attendance Hassle? We&apos;ve Got You Covered!</h2>
                </div>
                <div class="flex justify-center items-center p-6">
                    <div class="flex flex-col sm:flex-row gap-8">
                        <div class="card bg-[#7F56D9] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/costeffective.png" alt="cost-effective" />
                                <h2 class="font-bold font-sans text-2xl p-4">Cost-effective</h2>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white">
                                <p class="font-medium font-sans">Digitize your attendance process and save money on paper, stationary, and resources.</p>
                            </div>
                        </div>
                        <div class="card bg-[#079455] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/savetime.png" alt="save-time" />
                                <h2 class="font-bold text-2xl p-4 font-sans">Save time</h2>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white ">
                                <p class="font-medium font-sans">Fasten the check-in/check-out at your center process with our digital attendance platform.</p>
                            </div>
                        </div>
                        <div class="card bg-[#1570EF] text-white w-[384px] h-[504px] p-6 grid grid-cols-1 gap-64">
                            <div class="flex items-center">
                                <img src="/images/attendance/accuracy.png" alt="improve-accuracy" />
                                <h2 class="font-bold text-2xl p-4 font-sans">Improve accuracy</h2>
                            </div>
                            <div class="p-8 border border-solid bg-opacity-30 bg-white ">
                                <p class="font-medium font-sans">Reduce the risk of any human errors being caused while recording attendance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="flex w-[230px] h-[45px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Request Demo
                        <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                    </button>
                </div>
            </section >
            <section className="relative">
                <div className="px-4 sm:px-32 pb-10">
                    <div className="p-10">
                        <h2 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Budget-Friendly Childcare Management Software</h2>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">Our daycare management software is designed to be budget-friendly, maximizing your return on investment.  By streamlining tasks and reducing waste, you can save money and resources while still providing top-notch care to children.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="sm:hidden">
                            <img
                                src="/images/attendance/attendance-process.png"
                                alt="attendance-process"
                            />
                        </div>
                        <div className="p-4 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Savings</h4>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">Say goodbye to costly administrative expenses with our efficient software, saving both time and money.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Scalability</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">As your childcare business grows, our software grows with you, ensuring continued cost-effectiveness</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">High ROI</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Experience a high return on investment as you streamline operations and enhance productivity with our affordable software solution.</p>
                            </div>
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
                        <h2 className="font-sans sm:text-3xl text-xl font-semibold leading-44 tracking-tighter text-left">Simplify attendance management</h2>
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
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Contactless check-in</h4>
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
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Student and staff attendance</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Students and staff can be checked in manually/ by entering the kiosk code or by scanning the school&apos;s QR code.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"

                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Record late check-ins</h4>
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
                        <h2 className="font-sans text-xl sm:text-3xl font-semibold leading-44 tracking-tighter text-left">Elevate Your Childcare into the Digital Era</h2>
                        <p className="font-sans text-sm sm:text-base font-normal leading-30 tracking-normal text-left pt-5">KidPro isn&apos;t just about attendance tracking, it&apos;s about creating a modern childcare experience for everyone. Join the digital age and give your center the upgrade it deserves!</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-evenly items-center">
                        <div className="sm:hidden">
                            <img
                                src="/images/attendance/digital-age.png"
                                alt="childcare"
                            />
                        </div>
                        <div className="p-4 sm:p-8">
                            <div className="sm:w-[607px] sm:h-[86] w-full h-full sm:gap-x-12">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-sm sm:text-base font-semibold leading-30 tracking-normal text-left pl-3">Effortless Attendance Tracking</h4>
                                </div>
                                <p className="font-sans text-sm sm:text-base font-normal leading-24 tracking-normal text-left pl-10">Say goodbye to mountains of paper! Our intuitive attendance system saves time and keeps everything organized.</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86px] sm:gap-x-12 w-full h-full">
                                <div className="flex">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                        className=""
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3">Happy Parents, Happy Staff</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Streamlined processes and clear communication channels make life easier for everyone. Parents get real-time updates, while staff can focus on what matters most – the children!</p>
                            </div>
                            <div className="sm:w-[607px] sm:h-[86] sm:gap-x-12 h-full w-full">
                                <div className="flex sm:pt-3">
                                    <img
                                        src="/images/attendance/check-circle.png"
                                        alt="icon"
                                    />
                                    <h4 className="font-sans text-base font-semibold leading-30 tracking-normal text-left pl-3 ">Empowering Your Team</h4>
                                </div>
                                <p className="font-sans text-base font-normal leading-24 tracking-normal text-left pl-10">Our user-friendly software is easy to learn, even for those not tech-savvy. This empowers your staff and helps them work more efficiently.</p>
                            </div>
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
                            <div key={index} className="flex flex-col justify-evenly items-center h-[555px] w-[384px] shadow-xl p-4 m-2 border">
                                <h2 className="font-sans text-2xl font-semibold leading-7 text-center text-[#475467]">{feature.title}</h2>
                                <img src={feature.image} alt={feature.alt} className="mx-auto mb-4" />
                                <p className="font-sans text-base font-normal leading-6 text-center">{feature.description}</p>
                                <div className="mt-10">
                                    <button className="flex bg-[#1747C8] text-white w-[320px] h-[48px] rounded-lg  items-center justify-center font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                        {feature.buttonText}
                                        <img src="/images/attendance/arrow.png" className="ml-2" alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center m-6">
                    <button className="flex w-[230px] h-[45px] bg-[#1747C8] rounded-full text-white text-xl pl-5 p-2 font-sans hover:text-[#1747C8] hover:bg-opacity-30">Request Demo
                        <Image src="/images/home/arrow-right-white.png" alt="home" className="text-center p-2 ml-5" width={32} height={32} />
                    </button>
                </div>
            </section>
            <section className="relative">
                <div className="bg-gradient-to-b from-blue-200 to-white p-5">
                    <h2 className="font-bold text-center text-4xl font-sans">
                        Frequently asked questions
                    </h2>
                    <div className="flex justify-center items-center">
                        <FAQ numberOfQuestions={8} useGridCols2={false} faqData={faqDataAttendance} />
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
                            <button className="flex items-center justify-center bg-[#1747C8] text-white w-[250px] h-[48px] rounded-full font-sans hover:text-[#1747C8] hover:bg-opacity-30">
                                Request Demo
                                <img src="/images/home/arrow-right-white.png" className="p-2" alt="play" />
                            </button>

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
                    <div className="sm:p-10 m-8">
                        <div className="flex items-center justify-center">
                            <button className="w-[105px] bg-[#EBF0FF] h-[28px] text-[#1747C8] rounded-full font-sans">
                                Our Blog
                            </button>
                        </div>
                        <h2 className="font-sans text-3xl font-semibold text-center p-4">Featured Post</h2>
                        <div className="grid place-content-center">
                            <div className="sm:flex justify-evenly items-center text-left">
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
export default Attendance;