"use client";

import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider>
          <main
            style={{
              minHeight: "100vh",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "2rem",
            }}
          >
            {children}
          </main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
