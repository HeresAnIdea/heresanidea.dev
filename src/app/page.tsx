import "./globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ComingSoon from "@/components/ComingSoon";

function MyApp() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <ComingSoon />
      </div>
    </div>
  );
}
export default MyApp;
