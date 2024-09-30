import "./globals.css";

export const metadata = {
  title: "JMC Technology",
  description: "JMC Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>{children}</body>
    </html>
  );
}
