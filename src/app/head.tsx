import React from "react";

export default function Head() {
    const metadata = {
        title: "Tuaysa",
        description:
            "Sri Lankan online marketplace, where people can come together to buy and sell unique handmade creations in a warm and welcoming community",
    };

    return (
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#36AFC4" />

            <title>Tuaysa</title>
        </head>
    );
}
