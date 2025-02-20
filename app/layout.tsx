import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Image & Video Processing',
  description: 'Advanced AI-powered image and video processing using PyTorch transformers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-purple-900 to-indigo-900 text-white`}>
        {children}
      </body>
    </html>
  );
}