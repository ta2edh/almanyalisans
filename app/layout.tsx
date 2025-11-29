import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Almanya Lisans Başvurusu - Ücretsiz Rehber | Danışmanlık Olmadan Kendin Yap",
  description:
    "Almanya'da lisans eğitimi için adım adım ücretsiz başvuru rehberi. ÖSYM belgeleri, apostil, Uni-Assist, vize süreci ve NC hesaplama. 20.000-50.000 TL danışmanlık ücreti ödeme, tüm süreci kendin yap!",
  keywords: [
    "almanya lisans",
    "almanya üniversite başvurusu",
    "uni-assist başvuru",
    "almanya öğrenci vizesi",
    "ösym belgesi apostil",
    "almanya eğitim",
    "nc hesaplama",
    "almanya dil okulu",
    "sperrkonto",
    "verpflichtungserklärung",
    "yks almanya",
    "almanya lisans şartları",
    "uni-assist ücretleri",
    "almanya vize süreci",
    "telc sınavı",
    "goethe sertifikası"
  ],
  authors: [{ name: "Almanya Lisans Rehberi" }],
  creator: "Almanya Lisans Rehberi",
  publisher: "Almanya Lisans Rehberi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Almanya'da Lisans Başvurusu - Tüm Süreci Kendin Yap, Danışmanlığa Para Verme",
    description: "20.000-50.000 TL danışmanlık ücreti ödeme! Almanya lisans başvurusu için tüm adımlar, belgeler, ÖSYM, apostil, Uni-Assist ve vize süreci detaylı anlatım.",
    url: "https://almanyalisans.vercel.app",
    siteName: "Almanya Lisans Başvuru Rehberi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almanya Lisans Başvurusu - Ücretsiz Tam Rehber",
    description: "Danışmanlık olmadan Almanya'da üniversite başvurusu nasıl yapılır? ÖSYM, apostil, Uni-Assist ve vize süreci detaylı anlatım. Tüm bilgiler ücretsiz!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
