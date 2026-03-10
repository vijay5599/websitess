import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightPath Academy - IT Coaching in Bangalore",
  description: "BrightPath Academy offers Python, Data Science, and Full Stack Web Development courses in BTM Layout, Bangalore. Enroll today!",
  keywords: "coding, programming, python, data science, full stack, training, Bangalore",
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
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
