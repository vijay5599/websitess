import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Studio Salon - Hair & Beauty Services in Koramangala, Bangalore",
  description: "Premium salon services in Koramangala, Bangalore. Haircut, coloring, facial, bridal makeup, and more. Book your appointment today!",
  keywords: "salon, hair salon, beauty services, haircut, bridal makeup, facial, Koramangala, Bangalore",
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
