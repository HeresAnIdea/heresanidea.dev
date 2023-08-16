import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="w-64">
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      <Link href="/" className="mt-4 text-blue-500">
        Back to Home
      </Link>
    </div>
  );
};

export default Login;
