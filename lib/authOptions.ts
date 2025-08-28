import { API_LOGIN } from "@/utils/api-links";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
},
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // try {
        //   if (!credentials?.email || !credentials?.password) {
        //     return null;
        //   }
        //   const { email, password } = credentials;
        //   const res = await fetch(
        //     API_LOGIN,
        //     {
        //       method: "POST",
        //       body: JSON.stringify({
        //         email,
        //         password,
        //       }),
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     }
        //   );

        //   if (!res.ok) {
        //     console.error("Error:", res.status, res.statusText);
        //     return null;
        //   }
        //   // else {
        //   //   const user = await res.json();
        //   //   if (user.role === 2) {
        //   //     return user;
        //   //   }

        //   //   if (user.role === 1) {
        //   //     return user;
        //   //   }
        //   //   else {
        //   //     console.log("ko co quyen truy cap");
        //   //     return null;
        //   //   }
        //   // }
        //   const user = await res.json();
        //   return user;
        // } catch (error) {
        //   console.error("Fetch error:", error);
        //   return null;
        // }
        const user = { id: "1", name: "test", password: "test", accessToken: ""}
          return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // return { ...token, ...user };
        return {
          userData: user,
          data: {
            accessToken: user.accessToken,
            refreshToken: user.accessToken,
          },
        };
      }

      return token;
      // if (new Date().getTime() < token.data.expiresIn) {
      //   return token;
      // }
      // return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.userData;
      session.data = token.data;

      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
};

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/user/refresh-token`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token.data.refreshToken}`,
      },
    }
  );

  const response = await res.json();

  return {
    ...token,
    data: response,
  };
}
