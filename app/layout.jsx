import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ThemeContextProvider from "@/components/ThemeContextProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Laurent's Portfolio",
  description: "Laurent Gagné's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
      </html>
    </ThemeContextProvider>
  );
}
