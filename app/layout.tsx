import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sreeparvathy K A | MERN Stack Developer",
  description:
    "Portfolio of Sreeparvathy K A, an MCA graduate and MERN Stack Developer building responsive full-stack applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
