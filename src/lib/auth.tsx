import GithubProvider from "next-auth/providers/github";

const INTERNAL_USERS = ["nociza"];

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (INTERNAL_USERS.includes(profile.name)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
