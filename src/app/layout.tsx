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
      <body className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-50">
        <ThirdwebProvider>
          <main className="min-h-screen w-full max-w-[1200px] mx-auto">
            {children}
          </main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
