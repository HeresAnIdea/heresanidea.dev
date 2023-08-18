"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  console.log(useSession());
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="sticky top-0 p-7 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">HeresAnIdea.DEV</Link>
        </h1>
        <div className="space-x-4">
          {session ? (
            <Image
              alt="profile"
              height={40}
              width={40}
              className="rounded-full"
              src={session.user?.image as string}
            />
          ) : (
            <Link href="/login">Login</Link>
          )}
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
