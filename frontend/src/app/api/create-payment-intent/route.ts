import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
import {headers} from "next/headers";
import Stripe from 'stripe';
import {CartItem} from "@/stores/cart.store";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: Request) {
    const { items, amount } = await req.json();
    let metadata = {};

    items.map(({customization}: CartItem, index: number) => {
        console.log("product_" + index)
    })

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "eur",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        // automatic_payment_methods: {
        //     enabled: true,
        // },
        metadata,
    });

    return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
    })
}