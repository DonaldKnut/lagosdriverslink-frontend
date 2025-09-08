import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
