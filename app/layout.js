import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkTree",
  description: "Create Your Links here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://user-images.githubusercontent.com/12532733/90986349-ce9c2600-e547-11ea-9fd5-808801bb5a7d.png" />
      </head>
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
