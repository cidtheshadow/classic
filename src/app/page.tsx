import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Restaurant from "@/components/Restaurant";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col pt-0">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Restaurant />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
