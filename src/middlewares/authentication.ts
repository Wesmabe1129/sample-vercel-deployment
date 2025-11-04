import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export function authentication(req: NextRequest) {
    const token = req.headers.get("token");

    if (!token) {
        return NextResponse.json(
            {
                success: false,
                message: "UnAuthenticated User!"
            },
            {
                status: 401
            }
        );
    }

    try {
        const decoded = jwt.verify(token, process.env.API_SECRET_KEY!)
        return { user: decoded };
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid token"
            },
            {
                status: 401
            }
        )
    }
}
