import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iPhone 17 Pro - Apple",
  description: "Designed with titanium. Built for Apple Intelligence. The all-new iPhone 17 Pro features a monumental leap in performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full bg-background text-foreground antialiased selection:bg-titanium-600 selection:text-white"
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
