import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { SessionStrategy, NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "Email" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password",
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user) return null;

				const passwordsMatch = await bcrypt.compare(
					credentials.password,
					user.hashedPassword!
				);

				if (!passwordsMatch) {
					const error = new Error("Invalid email or password");
					error.name = "InvalidCredentials";
					throw error;
				}

				if (!user.isVerified) {
					const error = new Error(
						"Please verify your email before logging in."
					);
					error.name = "EmailNotVerified";
					throw error;
				}

				return user;
			},
		}),
	],

	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt" as SessionStrategy,
	},
};
