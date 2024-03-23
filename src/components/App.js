import css from "./App.module.css";
import { AboutSection } from "./About/AboutSection";
import { Faq } from "./FAQ/Faq";
import { HeaderSection } from "./Header/HeaderSection";
import { HeroSection } from "./Hero/HeroSection";
import { MindMap } from "./MindMap/MindMapSection";
import { ArtsSection } from "./Arts/ArtsSection";

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
    </div>
  );
}

export const App = () => {
  return <GlobalWrapper />;
};
