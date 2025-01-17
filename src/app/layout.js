import { Inter } from "next/font/google";
import { AuthProvider } from "../context/Auth";
import QueryProvider from "../providers/QueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
