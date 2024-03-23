/* eslint-disable @next/next/no-img-element */

const Footer = () => {
    return (
        <section className="bg-[#1747C8] py-10 px-5 flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
            <div className="flex flex-col flex-1 gap-5 p-4">
                <p className="sm:hidden text-center text-white mt-0 sm:mt-[50px] mb-5 font-sans">Empowering childcare excellence: KidsPro, where efficiency meets nurturing care for a brighter future.</p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-10">
                    <p className=" hidden sm:block col-span-1 row-span-4 text-left text-white mt-0 sm:mt-[50px] font-sans">Empowering childcare excellence: KidsPro, where efficiency meets nurturing care for a brighter future.</p>

                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>

                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                    <a href="#" className="text-white mb-3 sm:mb-0 ml-10 font-sans">Footer Title</a>
                </div>

                <hr className="w-full text-white my-5" />

                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-white mb-3 sm:mb-0 hidden sm:block font-sans">Copyright ©2023 kidpro</p>
                    <ul className="flex gap-5 mt-2">
                        <li><img className="h-10" src="/images/home/Social Media.png" alt="social-media" /></li>
                    </ul>
                    <p className="text-white mb-3 sm:mb-0 sm:hidden mt-3 font-sans">Copyright ©2023 kidpro</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;