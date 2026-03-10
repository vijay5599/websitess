import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightPath Academy - Coding Courses in BTM Layout, Bangalore",
  description: "Learn Python, Data Science, and Full Stack Development from BrightPath Academy. Enroll now! Courses in BTM Layout, Bangalore.",
  keywords: "coding courses, python, data science, full stack, programming, BTM Layout, Bangalore",
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
