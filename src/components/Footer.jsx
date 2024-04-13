/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
    return (
        <section className="bg-[#1747C8] py-10 px-5 flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
            {/* <div className="flex flex-col flex-1 gap-5 p-4">
                <p className="sm:hidden text-center text-white mt-0 sm:mt-[50px] mb-5 font-sans">Empowering childcare excellence: KidsPro, where efficiency meets nurturing care for a brighter future.</p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
                    <div>
                        <p className=" hidden sm:block col-span-1 row-span-4 text-left text-white mt-0 sm:mt-[50px] font-sans">Empowering childcare excellence: KidsPro, where efficiency meets nurturing care for a brighter future.</p>
                    </div>
                    <a href="#" className="text-white text-xl font-bold mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Features</a>
                    <a href="#" className="text-white mb-3 text-xl font-bold sm:mb-0 sm:ml-32 ml-10 font-sans">Resources</a>
                    <a href="#" className="text-white mb-3 text-xl font-bold sm:mb-0 sm:ml-32 ml-10 font-sans">Company</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Attendance</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Blogs</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">About-us</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Commuication</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans"></a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Contact-us</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Daily reports</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans"></a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Privacy policy</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans"></a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Enrollment</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans"></a>
                    <a href="#" className="text-white mb-3 sm:mb-0 sm:ml-32 ml-10 font-sans">Request Demo</a>


                </div>

                <hr className="w-full text-white my-5" />

                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-white mb-3 sm:mb-0 hidden sm:block font-sans">Copyright ©2023 kidpro</p>
                    <ul className="flex gap-5 mt-2">
                        <li><img className="h-10" src="/images/home/Social Media.png" alt="social-media" /></li>
                    </ul>
                    <p className="text-white mb-3 sm:mb-0 sm:hidden mt-3 font-sans">Copyright ©2023 kidpro</p>
                </div>
            </div> */}
            <div className="flex flex-wrap">
                <div className="w-full w-1/2 md:w-1/5 p-4">
                    <div className="box-content">
                        <Link href={"/"} className="flex sm:items-start sm:justify-start sm:pb-0 pb-6">
                            <img src="/images/home/logo.png" alt="kidpro_logo" className="h-full w-[150px]" />
                        </Link>
                    </div>
                    <p className="col-span-1 row-span-4 sm:text-left text-white mt-0 sm:mt-[50px] font-sans">Empowering childcare excellence: KidsPro, where efficiency meets nurturing care for a brighter future.</p>
                    <ul className="flex sm:mt-[50px]  hidden sm:block">
                        <li><img className="h-10 rounded-full" src="/images/home/SocialMedia.png" alt="social-media" /></li>
                    </ul>
                </div>

                <div className="w-1/2 md:w-1/5 p-4">
                    <Link href={"/"}>
                        <div className="text-white text-xl font-bold mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans underline">Features</div>
                    </Link>
                    <Link href={"/attendance"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Digital Attendance</div>
                    </Link>
                    <Link href={"/communication"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Parent Communication</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Daily Reports</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Enrollment</div>
                    </Link>
                </div>
                <div className="w-1/2 md:w-1/5 p-4">
                    <Link href={"/"}>
                        <div className="text-white text-xl font-bold mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans underline">Solutions</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Web Development</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Digital Marketing</div>
                    </Link>
                </div>
                <div className="w-1/2 md:w-1/5 p-4">
                    <Link href={"/"}>
                        <div className="text-white text-xl font-bold mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans underline">Resources</div>
                    </Link>
                    <Link href={"/blogs"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Blog</div>
                    </Link>
                </div>

                <div className="p-4">
                    <Link href={"/"}>
                        <div className="text-white text-xl font-bold mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans underline">Company</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">About-us</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Contact-us</div>
                    </Link>
                    <Link href={"/privacy"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Privacy-policy</div>
                    </Link>
                    <Link href={"/"}>
                        <div className="text-white mb-3 sm:mb-0 sm:ml-32 ml-0 font-sans sm:pt-[32px]">Request Demo</div>
                    </Link>
                </div>
                <hr className="w-full text-white my-5" />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white mb-3 sm:mb-0 hidden sm:block font-sans">Copyright ©2024 kidpro</p>

                    <ul className="flex mt-2 sm:hidden">
                        <li><img className="h-10 rounded-full" src="/images/home/linkedin.png" alt="social-media" /></li>
                        <li><img className="h-10 rounded-full" src="/images/home/fb.png" alt="social-media" /></li>
                        <li><img className="h-10 rounded-full" src="/images/home/youtube.png" alt="social-media" /></li>
                        <li><img className="h-10 rounded-full" src="/images/home/twitter.png" alt="social-media" /></li>
                    </ul>

                    <p className="text-white mb-3 sm:mb-0 sm:hidden mt-3 font-sans">Copyright ©2024 kidpro</p>
                </div>
            </div>
        </section >
    )
}

export default Footer;