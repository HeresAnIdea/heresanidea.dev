import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">heresanidea.dev</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-gray-600">
            Login
          </Link>
          <Link href="/pricing" className="text-gray-600">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-600">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
