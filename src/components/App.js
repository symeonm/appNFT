import css from "./App.module.css";
import { AboutSection } from "./About/AboutSection";
import { Faq } from "./FAQ/Faq";
import { HeaderSection } from "./Header/HeaderSection";
import { HeroSection } from "./Hero/HeroSection";
import { MindMap } from "./MindMap/MindMapSection";
import { ArtsSection } from "./Arts/ArtsSection";
import { ContactUS } from "./ContactUs/ContactUs";
import { Footer } from "./Footer/FooterSection";

function GlobalWrapper() {
  return (
    <div className={css.App}>
      <div className={css.containerHero}>
        <HeaderSection />
        <HeroSection />
      </div>
      <AboutSection />
      <MindMap />
      <Faq />
      <ArtsSection />
      <ContactUS />
      <Footer />
    </div>
  );
}

export const App = () => {
  return <GlobalWrapper />;
};
