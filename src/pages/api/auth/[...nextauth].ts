import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: FirestoreAdapter({
    apiKey: env.FIREBASE_APIKEY,
    authDomain: env.FIREBASE_AUTHDOMAIN,
    projectId: env.FIREBASE_PROJECTID,
    storageBucket: env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: env.FIREBASE_MESSAGINGSENDERID,
    appId: env.FIREBASE_APPID,
    measurementId: env.FIREBASE_MEASUREMENTID,
    emulator: {
      host: 'localhost',
      port: 3001
    }
  }),
  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
};

export default NextAuth(authOptions);
