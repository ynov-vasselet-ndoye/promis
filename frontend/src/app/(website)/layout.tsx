import type {Metadata} from "next";
import {Sen, Mochiy_Pop_One} from "next/font/google";
import "./globals.css";
import "./website.scss";

import {Footer, Header, Socials} from "@components/layout";
import React from "react";
import {SmoothScrolling} from "@components/Behavrioral";

const mochiy = Mochiy_Pop_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--ft-mochiy",
});
const avenir = Sen({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--ft-avenir",
});

export const metadata: Metadata = {
    title: "Promis | Luminaires Éco-Responsables en Carton",
    description: "Découvrez la gamme de luminaires éco-responsables en carton de Promis, alliant design et respect de l'environnement. Achetez maintenant des lampes innovantes et durables.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${mochiy.variable} ${avenir.variable}`}>
        <body>
        <Header/>
        <SmoothScrolling>
            {children}
        </SmoothScrolling>
        <Footer/>
        <Socials/>
        </body>
        </html>
    );
}
