import css from "./App.module.css";

import { HeaderSection } from "./Header/HeaderSection";

function GlobalWrapper() {
  return (
    <div className={css.App}>
      <div className={css.containerHero}>
        <HeaderSection />
      </div>
    </div>
  );
}

export const App = () => {
  return <GlobalWrapper />;
};
