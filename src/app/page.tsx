import "./globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";
import Link from "next/link";

function MyApp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <div className="container mx-auto">
        <ComingSoon />
      </div>
      <footer className="flex justify-center w-full text-gray-600 font-extralight">
        <Link href="https://www.nociza.com/me">@nociza 2023</Link> - all rights
        reserved
      </footer>
    </div>
  );
}
export default MyApp;
