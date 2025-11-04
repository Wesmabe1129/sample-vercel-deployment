import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import "dotenv/config";


export function authorization(req: NextRequest) {
    const apikey = req.headers.get('apikey');
    const validKey = process.env.API_KEY;
    console.log(validKey === apikey)

    if (!apikey || apikey !== validKey) {
        return NextResponse.json(
            {
                sucess: false,
                message: "UnAuthorized User!"
            },
            {
                status: 401
            }
        );
    }

    return null;
}