/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

const RequestDemo = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastName: "",
        email: "",
        role: "",
        phone: "",
        childcarename: "",
        numberOfStudents: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform form submission logic, like sending data to the server
        console.log("Form Submitted:", formData);
    };
    return (
        <>
            <section className="relative">
                <div className="h-full box-content px-6 py-4 md:pl-36 bg-[#1747C8]">
                    <Link href={"/"} className="flex items-start justify-start h-full w-full">
                        <img src="/images/home/logo.png" alt="kidpro_logo" className="h-[55px]" />
                    </Link>
                </div>
            </section>
            <section className="relative">
                <div className="grid gap-8 md:grid-cols-2 p-2 md:p-10">
                    <div>
                        <h2 className="text-2xl font-bold px-6 py-4 md:pl-36 font-sans">See Kidpro in Action! Free Demo & Start Streamlining your childcare Today.</h2>
                        <p className="w-11/12 px-6 py-4 md:pl-36 font-sans">Kidpro childcare management software empowers you to run your childcare center more efficiently and effectively.  Our all-in-one solution simplifies daily tasks, stronger communication, and provides valuable data to make informed decisions.</p>
                        <div className="hidden sm:block">
                            <img
                                src="images/home/teachers.png"
                                alt="reqdemo"
                                className="px-6 py-4 md:pl-36"
                            />
                            <ul className="px-6 py-4 md:pl-36">
                                <li className="font-bold font-sans">Here is a Kidpro’s popular Features</li>
                                <ul className="list-disc pt-2">
                                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Digital Attendance :</span> Eliminate paperwork & errors. Track arrivals, departures, & absences effortlessly.</li>
                                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Parent Communication :</span> Keep parents informed & engaged with real-time updates & photos.</li>
                                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Enrollment :</span> Simplify the application process with online forms & digital document submission.</li>
                                    <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Daily Reports :</span> Generate automated reports on activities, meals, & development milestones</li>
                                </ul>
                            </ul>
                            <div className="px-6 md:pl-36">
                                <p classname="font-sans">Empower your childcare center with Kidpro Now.!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto sm:w-[520px] sm:h-[742px] bg-[#1747C8] pt-5 sm:mt-12 rounded-lg">
                        <form className="p-4" onSubmit={handleSubmit} >
                            <div className="mb-4 flex">
                                <div className="mr-2 flex-1">
                                    <label htmlFor="firstName" className="text-sm text-white font-sans">First Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full h-[40px] border-slate-250 border-2 rounded-lg pl-4"
                                    />
                                </div>
                                <div className="ml-2 flex-1">
                                    <label htmlFor="lastName" className="text-sm text-white font-sans">Last Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full h-[40px] border-slate-250 border-2 rounded-lg pl-4"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="text-sm text-white font-sans">Email ID</label>
                                <br />
                                <input
                                    type="text"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[40px] border-slate-250 border-2 rounded-lg pl-4"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="text-sm text-white font-sans">Phone Number</label>
                                <br />
                                <input
                                    type="text"
                                    id="phone"
                                    name="phn.no"
                                    value={formData.phone}
                                    required
                                    onChange={handleChange}
                                    maxLength={14}
                                    className="w-full h-[40px] border-slate-250 border-2 rounded-lg pl-4"
                                />
                            </div>
                            <div className="grid gap-2 w-full mb-4">
                                <label htmlFor="role" className="text-white text-sm font-sans">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="rounded-md px-3 h-10 w-full border border-gray-300 bg-white"
                                    required
                                >
                                    <option value="" className="font-sans">Please Select</option>
                                    <option value="director/principle/head" className="font-sans">Director/Principle/School Head</option>
                                    <option value="educator" className="font-sans">Educator</option>
                                    <option value="teacher" className="font-sans">Teacher</option>
                                    <option value="other" className="font-sans">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="childcarename" className="text-sm text-white font-sans">Childcare Name</label>
                                <br />
                                <input
                                    type="text"
                                    name="childcarename"
                                    required
                                    value={formData.childcarename}
                                    onChange={handleChange}
                                    className="w-full h-[40px] border-slate-250 border-2 rounded-lg pl-4"
                                />
                            </div>
                            <div className="grid gap-2 w-full mb-4">
                                <label htmlFor="no.ofstudents" className="text-white text-sm font-sans">Number of Students</label>
                                <select
                                    id="no.ofstudents"
                                    name="no.ofStudents"
                                    onChange={handleChange}
                                    value={formData.numberOfStudents}
                                    className="rounded-md px-3 h-10 w-full border border-gray-300 bg-white"
                                    required
                                >
                                    <option value="" className="text-sm text-black font-sans">Please Select</option>
                                    <option value="1-10" className="text-sm text-black font-sans">1-10</option>
                                    <option value="10-30" className="text-sm text-black font-sans">10-30</option>
                                    <option value="30-50" className="text-sm text-black font-sans">30-50</option>
                                    <option value="50-90" className="text-sm text-black font-sans">50-99</option>
                                    <option value="100-250" className="text-sm text-black font-sans">100-250</option>
                                    <option value="More than 250" className="text-sm text-black font-sans">More than 250</option>
                                </select>
                            </div>
                            <p className="text-white m-4 font-sans">Ready for your free demo? Click "Request Demo" and we'll show you Kidpro! We value your privacy & never share info.</p>
                            <button
                                type="submit"
                                className="mb-4 flex items-center justify-center w-full md:w-40 h-12 bg-white text-[#1747C8] font-sans font-bold text-xl rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="sm:hidden">
                        <img
                            src="images/home/teachers.png"
                            alt="reqdemo"
                            className="px-6 py-4 md:pl-36"
                        />
                        <ul className="px-6 py-4 md:pl-36">
                            <li className="font-bold font-sans">Here is a Kidpro’s popular Features</li>
                            <ul className="list-disc pt-2">
                                <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Digital Attendance :</span> Eliminate paperwork & errors. Track arrivals, departures, & absences effortlessly.</li>
                                <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Parent Communication :</span> Keep parents informed & engaged with real-time updates & photos.</li>
                                <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Enrollment :</span> Simplify the application process with online forms & digital document submission.</li>
                                <li className="font-sans"><span style={{ fontWeight: 'bold' }}>Daily Reports :</span> Generate automated reports on activities, meals, & development milestones</li>
                            </ul>
                        </ul>
                        <div className="px-6 md:pl-36">
                            <p classname="font-sans">Empower your childcare center with Kidpro Now.!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default RequestDemo;