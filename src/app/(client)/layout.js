
import Footer from "../components/Shared/Footer/footer";
import "./globals.css";



export const metadata = {
  title: "JMC Technology",
  description: "JMC Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
