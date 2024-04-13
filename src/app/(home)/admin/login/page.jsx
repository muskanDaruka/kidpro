"use client";

import { useState, MouseEvent, useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../../../../context/Auth"
// import { signIn } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { AppRegistrationRounded } from "@mui/icons-material"

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [invalidmsg, setInvalidmsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const { setIsAdmin, setIsLogin } = useContext(AuthContext);

    const onSubmitAdminLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const res = await fetch('/api/admin/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Server error:", errorData.message);
                setError(errorData.message || 'Invalid Credentials');
                return;
            }

            const responseData = await res.json(); // Parse JSON only if the response is OK
            if (responseData.redirect === "/admin/blogs") {
                setIsAdmin(true);
            }
            if (responseData.status === "Success") {
                console.log("Login successful");
                router.replace(responseData.redirect);
                setIsLogin(true);
            } else {
                console.error("Server error:", responseData.message);
                setError(responseData.message || 'Invalid Credentials');
                router.replace(responseData.redirect);
            }
        } catch (error) {
            console.log(error);
            setError("Request failed");

        }
    };
    const passwordShow = () => {
        setShowPassword(!showPassword);
        // <span>Password is required</span>
        if (!password || password.length < 6) {
            setInvalidmsg("Password must be at least 6 characters long");
            return false;
        }
        setInvalidmsg("");
        return true;
    };
    //   const handleCloseClick = () => {
    //     setIsOpen(false);
    //   };
    const rememberMe = () => {
        console.log("Remember me clicked");
    };


    return (
        <section className="flex justify-center">
            <div className="grid place-items-center h-full fixed">
                <div className="border-slate-250 border-2 rounded-lg p-5">
                    <h2 className="text-xl font-bold mb-5 mt-10">
                        Admin Login
                    </h2>
                    <form onSubmit={onSubmitAdminLogin}>
                        <div className="flex items-end justify-between grid">
                            <label htmlFor="email">Email</label>

                            <input
                                type="text"
                                name="email"
                                // value={user?.email}
                                className="w-[400px] h-12 border-slate-250 border-2 rounded-lg"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </div>
                        <div className=" flex items-end justify-between grid ">
                            <label htmlFor="password">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    // value={user.password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-[400px] h-12 border-slate-250 border-2 rounded-lg"
                                />
                                <Image
                                    src={
                                        showPassword
                                            ? "/images/home/view_password.png"
                                            : "/images/home/hide_password.png"
                                    }
                                    alt={showPassword ? "Hide Password" : "View Password"}
                                    className="text-[#333] rounded-lg absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer w-8"
                                    width={8} height={5}
                                    onClick={passwordShow}
                                />
                            </div>
                            <span className="text-danger mb-2 ">{invalidmsg}</span>
                        </div>
                        <div className="flex">
                            <div className="mb-6">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    value="Remember me"
                                    onChange={rememberMe}
                                />
                                <label htmlFor="remember"> Remember me</label>
                            </div>
                        </div>
                        <button
                            className=" cursor-pointer px-6 py-2 bg-[#1747C8] text-white font-bold w-full rounded-md"
                        >
                            Login now
                        </button>
                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin;