import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Header from "./common/Header";
import { Toaster } from "../app/_components/ui/sonner"
import { TRPCReactProvider } from "~/trpc/react";
import { cn, constructMetadata } from "~/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex min-h-screen flex-col">
          <TRPCReactProvider cookies={cookies().toString()}>
            <Header />
            <div className="flex-1 flex-grow">{children}</div>
          </TRPCReactProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
