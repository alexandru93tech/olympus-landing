import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
