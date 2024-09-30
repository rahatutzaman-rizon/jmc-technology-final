import AllProviderLayout from "./AllProviderLayout";
import "./globals.css";

export const metadata = {
  title: "JMC Technology",
  description: "JMC Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AllProviderLayout>{children}</AllProviderLayout>
      </body>
    </html>
  );
}
