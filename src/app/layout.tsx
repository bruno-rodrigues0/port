import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat} from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"

const handwrite = Caveat({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-handwrite"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Silva - Web Developer",
  description: "A pixel-perfect portifolio inspired by chanhdai.com",
  creator: "Bruno Rodrigues e Silva",
  authors: {name: "Bruno Rodrigues e Silva", url: "https://port-amber-ten.vercel.com"},
  category: "portifolio",
  keywords: ["nextjs", "portifolio", "shadcnui", "pixel-perfect"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${handwrite.variable} h-full antialiased scroll-smooth selection:bg-primary selection:text-secondary overflow-x-hidden`}
      suppressHydrationWarning
    >
        <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
          <Analytics />
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
