"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import UserProfile from "./UserProfile";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "../context/Auth";

const adminMenus = [
  {
    imageUrl: "/images/home/arrow-right-white.png",
    label: "Attendance",
    path: "/admin/blogs",
  },
  {
    imageUrl: "/images/home/arrow-right-white.png",
    label: "Plans",
    path: "/admin/blogs",
  },
  {
    imageUrl: "/images/home/arrow-right-white.png",
    label: "Resource",
    path: "/admin/blogs",
  },
  {
    imageUrl: "/images/home/arrow-right-white.png",
    label: "Blog",
    path: "/admin/blogs",
  },

];

const AdminMenu = () => {
  const pathname = usePathname();
  const navigation = useRouter();
  const { isAdmin } = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(adminMenus.findIndex((item) => {
    return item.path == pathname;
  }));

  useEffect(() => {
    if (!isAdmin) {
      navigation.push('/');
      // setIsOpen(true);// Redirect to the login page if not authenticated as admin
    }
  }, [isAdmin, navigation]);
  useEffect(() => {
    const currentIndex = adminMenus.findIndex((adminMenu) => adminMenu.path === pathname);
    setActiveIndex(currentIndex);
  }, [pathname]);
  console.log(activeIndex, "activeIndex")

  return (
    <section className="h-full w-full bg-[#1747C8] object-fit h-fixed">
      <div className="h-full bg-[#1747C8] w-12/12  h-full">
        <Link
          href={"/"}
          className="h-full w-full"
        >
          <Image
            src="/images/home/logo.png"
            alt="kidpro_logo"
            width={200}
            height={50}
            className="p-[30px] pb-4 ml-10"
          />
        </Link>
        {adminMenus.map((adminMenu, index) => (
          <Link key={`${adminMenu.path}-${index}`} href={adminMenu.path}
          >
            <div
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer font-sans ${index === activeIndex ? "bg-[#1747C8] text-white h-[85px] w-full hover:text-white hover:text-opacity-50"
                : "text-white hover:text-white hover:text-opacity-50"}`}
            >
              <div className={`flex items-center ${index === activeIndex ? "bg-[#1747C8] " : ""}`} >
                <span className={`p-[5px] m-5 mt-6`}><Image src={adminMenu.imageUrl} alt="Icon" width={20}
                  height={18} style={{ filter: index === activeIndex ? "brightness(0) invert(1)" : "brightness(1)" }} /></span>
                <div className={`p-[10px] text-xl m-5 font-sans`}>{adminMenu.label}</div>
              </div>
            </div>
          </Link>
        ))}
        <UserProfile />
      </div>
    </section>
  );
};

export default AdminMenu;
