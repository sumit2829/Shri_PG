import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://श्रीpghouse.com"),
  title: {
    default: `${site.name} | Premium PG Near Galgotias University & NIU University`,
    template: `%s | ${site.name}`
  },
  description: "Premium PG accommodation near Galgotias University and NIU University with AC rooms, food, WiFi, security, and affordable student living.",
  openGraph: {
    title: site.name,
    description: "Safe, comfortable, and affordable PG accommodation in Greater Noida.",
    type: "website",
    locale: "en_IN",
    siteName: site.name
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans text-slate-900 antialiased dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
