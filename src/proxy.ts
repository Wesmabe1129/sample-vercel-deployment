import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authorization } from "./middlewares/authorization";
import { authentication } from "./middlewares/authentication";


export function proxy(req: NextRequest) {
    const authorization_res = authorization(req);
    // console.log(authorization_res)
    if (authorization_res) {
        return authorization_res
    };

    const authentication_res = authentication(req);

    if (authentication_res) {
        return authentication_res
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'],
}