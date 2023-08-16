import "./globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar.tsx";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
