import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import YandexMetrika from "../components/YandexMetrika";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Доктор Маркарян Эдуард Жорикович - Хирург-колопроктолог",
  description: "Опытный хирург-колопроктолог. Профессиональная медицинская помощь при заболеваниях толстого кишечника и прямой кишки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${geistMono.variable} font-inter antialiased`}
        suppressHydrationWarning
      >
        {children}
        <YandexMetrika counterId={process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID} />
      </body>
    </html>
  );
}
