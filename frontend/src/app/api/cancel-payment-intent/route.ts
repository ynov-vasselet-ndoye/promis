import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import Stripe from 'stripe';

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: Request) {
    const { paymentIntentId } = await req.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);

    console.log(paymentIntent)

    return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentStatus: paymentIntent.status
    })
}