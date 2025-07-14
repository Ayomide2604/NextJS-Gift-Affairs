import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
	title: z.string().min(3),
});
export async function GET(request: NextRequest) {
	const collections = await prisma.collection.findMany();

	return NextResponse.json(collections);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.issues, { status: 400 });
	}
	const { title } = validation.data;
	const collection = await prisma.collection.create({
		data: {
			title,
		},
	});
	return NextResponse.json(collection);
}
