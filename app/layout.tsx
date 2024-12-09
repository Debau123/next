import '@/app/ui/global.css';
import { fuenteX } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fuenteX.className} antialiased`}>{children}</body>
    </html>
  );
}