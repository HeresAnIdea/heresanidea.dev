import "./globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";

function MyApp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <div className="container mx-auto">
        <ComingSoon />
      </div>
      <footer className="flex justify-center w-full h-6 pr-3 text-gray-600">
        @nociza 2023 - all rights reserved
      </footer>
    </div>
  );
}
export default MyApp;
