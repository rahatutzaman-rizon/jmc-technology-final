import AllProviderLayout from "./AllProviderLayout";
import "./globals.css";
import { Poppins } from "@next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want
});


export const metadata = {
  title: "JMC Technology Ltd",
  description: "JMC Technology Ltd",
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
