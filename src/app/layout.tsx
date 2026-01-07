import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
