import css from "./MindMapSection.module.css";
import { MindMapSlider } from "./MindMapSlider/MindMapSlider";

export const MindMap = () => {
  return (
    <section id="#m-map">
      <h2 className={css.titleMindMap}>MIND MAP</h2>
      <MindMapSlider />
    </section>
  );
};
