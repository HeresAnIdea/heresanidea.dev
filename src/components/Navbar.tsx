import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 p-7 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">HeresAnIdea.DEV</Link>
        </h1>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
