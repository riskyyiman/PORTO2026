import './globals.css';

export const metadata = {
  title: 'riskymanlael | Front-End Web Developer',
  description: 'Portofolio Front-End Web Developer yang fokus pada kode rapi, aplikasi skalabel, dan performa tinggi.',
  icons: {
    icon: '/icons.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
