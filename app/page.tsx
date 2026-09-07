import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
}
