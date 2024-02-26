import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Attribution from "./components/Attribution"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${montserrat.className} bg-very-light-grayish-blue text-dark-grayish-blue flex min-h-screen flex-col items-center font-bold`}
      >
        {children}
        <Attribution />
      </body>
    </html>
  )
}
