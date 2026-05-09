import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "SkillSphere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
         <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
