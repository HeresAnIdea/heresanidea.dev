"use client";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
