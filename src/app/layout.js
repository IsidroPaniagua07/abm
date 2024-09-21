import { Dancing_Script } from 'next/font/google'
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add this line
  display: 'swap',
  variable: '--font-dancing-script',
})

export const metadata = {
  title: "Acrylics By Magaly",
  description: "Schedule your appointment with Acrylics By Magaly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body className={dancingScript.className}>
        {children}
      </body>
    </html>
  );
}
