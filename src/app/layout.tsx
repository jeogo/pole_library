import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/Amiri-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "القطب للمكتبية | Pole Library",
  description: "قائمة إلكترونية لمستلزمات التلاميذ بشكل بسيط و احترافي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
