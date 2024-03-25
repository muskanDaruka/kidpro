/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/Auth";

const menus = [
    {
        label: "Features",
        path: "/",
        submenus: [
            { label: "Attendance", path: "/attendance" },
            { label: "Communication", path: "/" },
            { label: "Daily reports", path: "/" },
            { label: "Enrollment", path: "/" },
        ],
    },
    {
        label: "Plans",
        path: "/",
    },
    {
        label: "Resource",
        path: "/",
    },
    {
        label: "Blog",
        path: "/blogs",
    },
];

const Menu = () => {
    const { isOpen, setIsOpen } =
        useContext(AuthContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);
    // const [showSubmenu, setShowSubmenu] = useState(false);
    // const toggleSubmenu = () => {
    //     setShowSubmenu(!showSubmenu);
    // };

    return (
        <section className="h-20 sm:h-20 sm:bg-[#1747C8] bg-[#1747C8] fixed  w-screen z-20">
            <nav className="flex flex-row items-center justify-between sm:justify-evenly h-14 sm:h-16">
                <div className="h-full box-content">
                    <Link href={"/"} className="flex items-center justify-center h-full w-full">
                        <img src="/images/home/logo.png" alt="kidpro_logo" />
                    </Link>
                </div>

                <div className="sm:hidden bg-[#1747C8] w-14 h-full text-white flex items-center justify-center">
                    <div>
                        <img src="/images/home/menu.png" alt="Menu" />
                    </div>
                </div>
                <div className="sm:flex hidden sm:items-center gap-4 sm:justify-center">
                    {menus.map((menu, index) => (
                        <div key={menu.path} className="relative font-bold font-sans"
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <Link
                                href={menu.path}
                                className={`inline-block p-6 py-4 font-sans ${index === activeIndex ? "bg-[#1747C8] text-white h-full" : "text-white"
                                    }`}
                            >
                                <span className={`${index !== activeIndex ? "hover:text-black" : ""
                                    } ${index === activeIndex ? "text-white hover:black" : "text-white"}`}>{menu.label}</span>
                            </Link>
                            {hoverIndex === index && menu.submenus && (
                                <div className="absolute top-full left-5 z-10 bg-white shadow-lg py-2 font-sans  rounded-lg">
                                    {menu.submenus.map((submenu) => (
                                        <Link key={submenu.path} href={submenu.path}>
                                            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-sans rounded-lg">
                                                {submenu.label}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* <div onClick={() => setIsRegistrationOpen(true)}>Register</div> */}
                <div className="hidden sm:flex items-center mr-[50px]">
                    <div className="px-10 h-full flex items-center text-white sm:bg-[#1747C8] font-sans" onClick={() => setIsOpen(true)}>
                        Login

                        <button className="ml-4 bg-white bg-opacity-30 w-[154px] h-[42px] p-2 pl-5 rounded-full font-sans">Request Demo</button>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Menu;