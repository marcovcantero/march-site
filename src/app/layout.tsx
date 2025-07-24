// app/layout.tsx
import './globals.css';
import { Montserrat, Caveat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.className} ${caveat.className}`}>
      <head>
        <meta charSet="UTF-8" />
        <title>2 years!</title>
        <link rel="icon" type="image/svg+xml" href="/heart.svg" />
      </head>
      <body>
        {/* Logo at top left */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            position: "fixed",
            top: "10px",
            left: "24px",
            width: "180px",
            height: "80px",
            zIndex: 1001,
            borderRadius: "12px",
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}