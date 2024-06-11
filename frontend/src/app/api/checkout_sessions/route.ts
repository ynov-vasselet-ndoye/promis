import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

type CombineRequest = Request & NextApiRequest;
type CombineResponse = Response & NextApiResponse;

export async function POST(req: CombineRequest) {
    const headersList = headers()

    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of
                    // the product you want to sell
                    price: 'price_1OkbCGER9b9x4hrUlXUv77pP',
                    quantity: 1,
                },
                {
                    // Provide the exact Price ID (for example, pr_1234) of
                    // the product you want to sell
                    price: 'price_1OoUcPER9b9x4hrU3e13HTEK',
                    quantity: 2,
                },
            ],
            mode: 'payment',
            return_url: `${headersList.get("origin")}/return?session_id={CHECKOUT_SESSION_ID}`,
            automatic_tax: {enabled: true},
        });

        return NextResponse.json({clientSecret: session.client_secret});
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: err.statusCode || 500});
    }
}

export async function GET(req: CombineRequest) {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

        return NextResponse.json({
            status: session.status,
            customer_email: session.customer_details.email
        });
    } catch (err: any) {
        return NextResponse.json({error: err.message}, {status: err.statusCode || 500});
    }
}