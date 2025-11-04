import { NextResponse } from "next/server";
import { getAllAccounts, createAccount } from "../../../services/userService";

export async function GET() {
    const account = await getAllAccounts();
    return NextResponse.json(account)
}

export async function POST(req: Request) {
    const data = await req.json();
    const account = await createAccount(data);
    return NextResponse.json(account)
}