import css from "./MindMapSection.module.css";
import { MindMapSlider } from "./MindMapSlider/MindMapSlider";

export const MindMap = () => {
  return (
    <section>
      <h2 className={css.titleMindMap}>MIND MAP</h2>
      <MindMapSlider />
    </section>
  );
};
