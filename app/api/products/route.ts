import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const schema = z.object({
	title: z.string().min(3),
	description: z.string().min(3),
	price: z.number(),
	collectionId: z.string().min(3),
	images: z.array(z.string()),
});

export async function GET(request: NextRequest) {
	const products = await prisma.product.findMany({
		include: {
			images: true,
			collection: true,
		},
	});
	return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.issues, { status: 400 });
	const { title, price, description, collectionId, images } = validation.data;
	const product = await prisma.product.create({
		data: {
			title,
			description,
			price,
			collectionId,
			images: {
				create: images.map((image) => ({ url: image })),
			},
		},
	});
	return NextResponse.json(product);
}
