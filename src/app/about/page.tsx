import Link from "next/link";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen space-y-4 -mt-14">
        <h1 className="text-2xl font-bold">About HeresAnIdea.dev</h1>
        <p className="w-2/3 text-center">
          HeresAnIdea.dev is a platform for indie developers to share, critique,
          and collaborate on ideas. Our mission is to foster a community where
          innovation thrives and everyone feels empowered to bring their ideas
          to life.
        </p>
        <Link href="/" className="mt-4 text-blue-500">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
