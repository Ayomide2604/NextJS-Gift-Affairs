import { prisma } from "@/prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json();

	const { email, password } = body;

	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) {
		return NextResponse.json(
			{ message: "No Account exist with that email " },
			{ status: 400 }
		);
	}
	const match = await bcrypt.compare(password, user.hashedPassword!);
	if (!match) {
		return NextResponse.json(
			{ message: "Invalid Credentials" },
			{ status: 400 }
		);
	}

	if (!user.isVerified) {
		return NextResponse.json(
			{ message: "Account has not been verified" },
			{ status: 400 }
		);
	}

	return NextResponse.json({ message: "Login Successful" }, { status: 200 });
}
