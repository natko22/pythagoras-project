import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Greek with Confidence",
  description:
    "Personalised Greek language lessons online worldwide and in person in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
