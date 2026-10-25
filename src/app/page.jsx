import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Milestones from "@/components/milestones";
import NavigationDock from "@/components/navigation-dock";
import { ProjectGallery } from "@/components/project-gallery";
import Projects from "@/components/projects";
import ScrollReveals from "@/components/scroll-reveals";
import SvgSprite from "@/components/svg-sprite";
import Toolkit from "@/components/toolkit";

export default function HomePage() {
  return (
    <ProjectGallery>
      <SvgSprite />
      <div className="wrap">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Milestones />
          <Toolkit />
          <Contact />
        </main>
        <Footer />
      </div>
      <NavigationDock />
      <ScrollReveals />
    </ProjectGallery>
  );
}
