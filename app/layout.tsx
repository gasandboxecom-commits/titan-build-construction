import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titan Build Construction | Built on Trust. Designed to Last.",
  description: "A fictional Philippine design and construction company website concept.",
};

export const viewport: Viewport = { themeColor: "#17191b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
