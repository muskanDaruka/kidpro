/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth"
import { usePathname } from "next/navigation";

const menus = [
    {
        label: "Features",
        path: "",
        submenus: [
            { label: "Digital Attendance", path: "/attendance" },
            { label: "Parents Communication", path: "/communication" },
            { label: "Daily reports", path: "/" },
            { label: "Enrollment", path: "/" },
        ],
        img: "/images/home/arrow-down.png"
    },
    {
        label: "Other Solutions",
        path: "/",
        submenus: [
            { label: "Childcare Website Design", path: "/" },
            { label: "Childcare Digital Marketing", path: "/" },
        ],
        img: "/images/home/arrow-down.png"
    },
    {
        label: "Plans",
        path: "/",
        img: "/images/home/arrow-right.png"
    },

    {
        label: "Resource",
        path: "/",
        img: "/images/home/arrow-right.png"
    },
    {
        label: "Blog",
        path: "/blogs",
        img: "/images/home/arrow-right.png"
    },
];

const Menu = () => {
    const pathname = usePathname()
    const [isReqdemoActive, setIsReqdemoActive] = useState(false);
    const { isOpen, setIsOpen } =
        useContext(AuthContext);
    const [activeIndex, setActiveIndex] = useState(menus.findIndex((item) => {
        return item.path == pathname;
    }));
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const toggleSubmenu = (index) => (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex === index ? null : index);
    };
    useEffect(() => {
        const currentIndex = menus.findIndex((menu) => menu.path === pathname);
        setActiveIndex(currentIndex);
    }, [pathname]);

    // const [showSubmenu, setShowSubmenu] = useState(false);
    // const toggleSubmenu = () => {
    //     setShowSubmenu(!showSubmenu);
    // };

    return (
        <section className="h-16 sm:h-20 sm:bg-[#1747C8] bg-[#1747C8] fixed  w-screen z-20">
            <nav className="flex flex-row items-center justify-between sm:justify-evenly h-14 sm:h-16">
                <div className="h-full box-content">
                    <Link href={"/"} className="flex items-center justify-center h-full w-full">
                        <img src="/images/home/logo.png" alt="kidpro_logo" className="h-[55px]" />
                    </Link>
                </div>

                <div className="sm:hidden bg-[#1747C8] w-14 h-full text-white flex items-center justify-center" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <div onClick={closeMenu} className="text-white">
                            <img src="/images/home/close.png" alt="Close" className="flex justify-end items-end ml-24 w-14 mr-2" />
                        </div>
                    ) : (
                        <div>
                            <img src="/images/home/menu.png" alt="Menu" className="flex justify-end items-end" />
                        </div>
                    )}

                </div>
                {isMenuOpen && (

                    <div>

                        <div className="sm:hidden bg-white w-full h-[1000px] fixed top-14 left-0 flex flex-col text-white font-sans">
                            {menus.map((menu, index) => (

                                <div key={menu.label}>

                                    <Link
                                        href={menu.path}
                                        onClick={(e) => {
                                            setIsMenuOpen(false);
                                            setActiveIndex(index);
                                        }}
                                        className={`flex justify-start items-start block px-10 py-4 text-xl font-sans ${index === activeIndex ? "text-[#1747C8] hover:text-gray-500" : "text-black hover:text-[#1747C8]"} `}
                                    >
                                        {/* <span className={`${index !== activeIndex ? "hover:text-[#1747C8]" : ""} ${index === activeIndex ? "text-[#1747C8] hover:text-gray-500" : "text-black"}`} > */}
                                        {menu.label}
                                        {/* </span> */}
                                        <div className="flex items-center justify-center">
                                            {!menu.submenus && (
                                                <img src="/images/home/arrow-right1.png" alt="Icon" className="ml-2 mt-2" />
                                            )}
                                        </div>
                                        <div className="grid justify-items-end ml-24">
                                            <div onClick={(e) => e.stopPropagation()}>
                                                {menu.submenus && (
                                                    <img
                                                        src={activeIndex === index ? "/images/home/arrow-down.jpeg" : "/images/home/arrow-down.png"}
                                                        alt="Submenu Icon"
                                                        className="mt-2 cursor-pointer"
                                                        onClick={toggleSubmenu(index)}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                    {menu.submenus && activeIndex === index && (
                                        <div className="pl-10">
                                            {menu.submenus.map((submenu) => (
                                                <Link key={submenu.label} href={submenu.path} onClick={closeMenu} className={`block py-4 text-gray-800 text-sm font-sans hover:text-[#1747C8]${index === activeIndex ? "text-[#1747C8] hover:text-gray-500" : "text-black hover:text-[#1747C8]"}`}>
                                                    {submenu.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="sm:hidden flex items-center justify-center p-6">
                                <button className="ml-4 bg-[#1747C8]  hover:bg-opacity-20 w-[250px] h-[42px] p-2 pl-5 rounded-lg font-sans text-white hover:text-opacity-30">Request Demo</button>
                            </div>
                            <div className="sm:hidden flex items-center justify-center">
                                <div className="px-10 h-full flex items-center text-[#1747C8] text-xl font-sans" onClick={() => setIsOpen(true)}>Login</div>
                            </div>
                        </div>
                    </div>
                )}

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
                                <div className="absolute top-full -left-8 z-10 bg-white shadow-lg py-2 font-sans  rounded-lg w-60">
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
                        <Link href="/requestdemo">
                            <div
                                onClick={() => {
                                    setIsReqdemoActive(true);
                                    setActiveIndex(undefined);
                                }}
                                className={`sm:block hidden flex items-center justify-center h-full w-full px-10 py-5  ${isReqdemoActive ? "text-opacity-50 hover:text-opacity-30" : "text-black"}`}
                            >
                                <button className="ml-4 bg-white bg-opacity-30  hover:bg-opacity-20 w-[154px] h-[42px] p-2 pl-5 rounded-full font-sans text-white hover:text-opacity-30">Request Demo</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Menu;