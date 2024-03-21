import css from "./App.module.css";
import { AboutSection } from "./About/AboutSection";
import { Faq } from "./FAQ/Faq";
import { HeaderSection } from "./Header/HeaderSection";
import { HeroSection } from "./Hero/HeroSection";
import { MindMap } from "./MindMap/MindMapSection";

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
    </div>
  );
}

export const App = () => {
  return <GlobalWrapper />;
};
