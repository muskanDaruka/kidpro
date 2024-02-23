"use client";
import { AuthContext } from "@/context/Auth";
import { useContext } from "react";
import Menu from "@/components/Menu";

export default function HomeLayout({ children }) {
    const { isOpen } =
        useContext(AuthContext);

    return (
        <>
            <Menu />
            {isOpen && (
                <div className="absolute top-0 bg-black/5 flex items-center justify-center z-50">
                    Login
                </div>
            )}
            <div className="relative top-14 sm:top-16 h-[1000px]">{children}</div>
        </>
    );
}