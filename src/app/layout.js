import Head from "next/head";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { auth } from "@/auth";

import { dbConnect } from "@/lib/mongo";

export const metadata = {
  title: "Rakt",
  description: "A blood donation platform",
};

export default async function RootLayout({ children }) {

  const conn = await dbConnect();
  
  return (
    <>
      <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      </Head>
      <html lang="en">
        <body>
            <Navbar />
            {children}
            <Footer />
        </body>
      </html>
    </>
  );
}