// Path: src/app/layout.tsx

import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Company Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* offset navbar 54px */}
      <body className="pt-[54px]">
        <Navbar />
        {/* hanya padding horizontal & bottom */}
        <main className="px-6 pb-6">
          {children}
        </main>
      </body>
    </html>
  );
}
