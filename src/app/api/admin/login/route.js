import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const adminEmail = "admin@kidpro.com";
        const adminPassword = "admin@5678";

        if (email === adminEmail && password === adminPassword) {
            return NextResponse.json({
                message: "Admin login successful",
                status: "Success",
                statusCode: 200,
                redirect: "/admin/blogs",
            });
        } else {
            return NextResponse.json({
                message: "Invalid credentials",
                status: "Error",
                statusCode: 401,
                redirect: "/",
            });
        }
    } catch (error) {
        console.error("Error processing login request:", error);
        return NextResponse.error(new Error("Internal Server Error"));
    }
}
