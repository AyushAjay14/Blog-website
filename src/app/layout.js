import Navbar from "@/components/navbar/Navbar";
import { inter } from "./fonts";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

export const metadata = {
  title: "MERN Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
