import { NextResponse, NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	if (parseInt(params.id) > 3)
		return NextResponse.json({ message: "No product with id found" });
	return NextResponse.json(`product Detail page ${params.id}`);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	if (parseInt(params.id) > 3)
		return NextResponse.json({ message: "No product with id found" });
	return NextResponse.json({ message: "Product deleted successfully" });
}
