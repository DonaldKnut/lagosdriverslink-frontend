import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
