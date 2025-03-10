import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
const geistSans = localFont({
  src: "./fonts/Gilroy-Black.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const font2 = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${font2.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
