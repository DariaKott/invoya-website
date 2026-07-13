import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Features } from "@/components/sections/Features/Features";
import { Hero } from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </>
  );
}
