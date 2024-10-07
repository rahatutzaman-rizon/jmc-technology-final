import AllProviderLayout from "./AllProviderLayout";
import "./globals.css";
import { Open_Sans, Libre_Caslon_Display } from "@next/font/google";

export const openSans  = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Specify the weights you want
});

const libreCaslon = Libre_Caslon_Display({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "JMC Technology Ltd",
  description: "JMC Technology Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AllProviderLayout>{children}</AllProviderLayout>
      </body>
    </html>
  );
}
