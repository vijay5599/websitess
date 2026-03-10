import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic - Best Dentist in Whitefield, Bangalore",
  description: "SmileCare Dental Clinic offers dental cleaning, root canal, teeth whitening, implants, and braces in Whitefield, Bangalore. Book your appointment today!",
  keywords: "dentist, dental clinic, teeth whitening, dental implants, root canal, Whitefield, Bangalore",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
