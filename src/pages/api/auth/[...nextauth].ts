// importing libraries
import NextAuth from "next-auth/next";

// importing providers
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
