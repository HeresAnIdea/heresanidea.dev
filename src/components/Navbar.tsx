import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">heresanidea.dev</h1>
        <div className="space-x-4">
          <Link href="/login">
            <a className="text-gray-600">Login</a>
          </Link>
          <Link href="/pricing">
            <a className="text-gray-600">Pricing</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
