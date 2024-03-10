/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/Auth";

const menus = [
    {
        label: "Solutions",
        path: "/solutions",
    },
    {
        label: "Plans",
        path: "/plans",
    },
    {
        label: "Resource",
        path: "/resource",
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

    return (
        <section className="h-14 sm:h-16 sm:bg-[#1747C8] bg-[#1747C8] fixed  w-screen z-20">
            <nav className="flex flex-row items-center justify-between sm:justify-center h-14 sm:h-16">
                <div className="h-full box-content">
                    <Link href={"/"} className="flex items-center justify-center h-full w-full">
                        <img src="/images/logo.png" alt="kidpro_logo" />
                    </Link>
                </div>

                <div className="sm:hidden bg-[#1747C8] w-14 h-full text-white flex items-center justify-center">
                    <div>
                        <img src="/images/menu.png" alt="Menu" />
                    </div>
                </div>
                <div className="sm:flex hidden items-center gap-4 justify-center mr-[300px]">
                    {menus.map((menu, index) => (
                        <Link
                            key={menu.path}
                            href={menu.path}
                            onClick={() => {
                                setActiveIndex(index);
                            }}
                            className={`inline-block p-6 sm:px-10 py-4 ${index === activeIndex
                                ? "bg-[#1747C8] text-white h-full"
                                : "text-white"
                                }`}
                        >
                            <span className={`${index !== activeIndex ? "hover:text-black" : ""
                                } ${index === activeIndex ? "text-white hover:black" : "text-white"}`}>{menu.label}</span>
                        </Link>
                    ))}
                </div>
                {/* <div onClick={() => setIsRegistrationOpen(true)}>Register</div> */}
                <div className="hidden sm:flex items-center mr-[100px]">
                    <div className="px-10 h-full flex items-center text-white sm:bg-[#1747C8]" onClick={() => setIsOpen(true)}>
                        Login

                        <button className="ml-4 bg-white bg-opacity-50 w-[154px] h-[42px] p-2 pl-5 rounded-full">Request Demo</button>
                    </div>
                </div>

                {/* <div className="sm:hidden bg-[#34383d] px-10 h-full flex items-center text-white" onClick={() => setIsOpen(true)}>
          Login
        </div> */}
            </nav>
        </section>
    );
};

export default Menu;