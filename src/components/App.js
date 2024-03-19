import { AboutSection } from "./About/AboutSection";
import css from "./App.module.css";

import { HeaderSection } from "./Header/HeaderSection";
import { HeroSection } from "./Hero/HeroSection";

function GlobalWrapper() {
  return (
    <div className={css.App}>
      <div className={css.containerHero}>
        <HeaderSection />
        <HeroSection />
      </div>
      <AboutSection />
    </div>
  );
}

export const App = () => {
  return <GlobalWrapper />;
};
