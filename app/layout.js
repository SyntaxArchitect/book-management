import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Management App - Simplify Your Reading Collection",
  description: "Effortlessly manage your book collection with our user-friendly book management app. Add, edit, and delete books, search by title, filter by genre, and ensure your library is always organized. Experience seamless book management with enhanced security through user authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
