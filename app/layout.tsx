import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx'
import { FireFliesBackground, Sound } from "@/components";
const inter = Inter({ subsets: ["latin"] ,
  variable:"--font-inter"
});

export const metadata: Metadata = {
  title:"ariyansalari",
  description:"ariyan salari portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/background/trafficLightAriyan.jpg" /> 
      </head>
      <body className={clsx(inter.variable,'bg-background text-foreground font-inter')}>{children}
      <FireFliesBackground/>
      <Sound/>
      <div id='my-modal'/>
      </body>
    </html>
  );
}
