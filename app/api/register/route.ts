import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";

const schema = z.object({
	name: z.string().min(3),
	email: z.email(),
	password: z.string().min(5),
});
export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.issues, { status: 400 });

	const { name, email, password } = validation.data;

	// Check if user already exists
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	// If user exists, return error
	if (user)
		return NextResponse.json(
			{ message: "User Already exists" },
			{ status: 400 }
		);

	// Hash password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create user
	try {
		const newUser = await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					name,
					email,
					hashedPassword,
				},
			});

			// Generate verification token
			const crypto = await import("crypto");
			const { addMinutes } = await import("date-fns");
			const token = crypto.randomBytes(32).toString("hex");

			await tx.verificationToken.create({
				data: {
					identifier: email,
					token,
					expires: addMinutes(new Date(), 30), // valid for 30 mins
				},
			});

			// Construct verification URL
			const verifyUrl = `${
				process.env.NEXTAUTH_URL
			}/api/verify-email?token=${token}&email=${encodeURIComponent(email)}`;
			console.log(verifyUrl);

			return createdUser;
		});

		return NextResponse.json(
			{
				message: "user created successfully",
				newUser: {
					name: newUser.name,
					email: newUser.email,
				},
			},
			{ status: 201 }
		);
	} catch (error: Error | unknown) {
		if (error instanceof Error) {
			return NextResponse.json({ error }, { status: 500 });
		}
	}
}
