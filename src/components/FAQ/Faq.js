import css from "./Faq.module.css";
import useTogle from "../../hooks/useTogle";

export const Faq = () => {
  const [cardOpen1, setCardOpen1] = useTogle(false);
  const [cardOpen2, setCardOpen2] = useTogle(true);
  const [cardOpen3, setCardOpen3] = useTogle(false);
  const [cardOpen4, setCardOpen4] = useTogle(false);

  return (
    <section className={css.faqSection}>
      <h2 className={css.faqTitle}>FAQ</h2>
      <ul>
        <li onClick={setCardOpen1}>
          <p>[1]</p>
          <h3 className={css.faqCardTitle}>WHAT IS AN NFT COLLECTION?</h3>
          {cardOpen1 && (
            <p className={css.faqText}>
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </p>
          )}
        </li>
        <li onClick={setCardOpen2}>
          <p>[2]</p>
          <h3 className={css.faqCardTitle}>
            HOW DO I PURCHASE NFTS FROM A COLLECTION?
          </h3>
          {cardOpen2 && (
            <p className={css.faqText}>
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </p>
          )}
        </li>
        <li onClick={setCardOpen3}>
          <p>[3]</p>
          <h3 className={css.faqCardTitle}>
            CAN I SELL OR TRADE NFTS FROM A COLLECTION?
          </h3>
          {cardOpen3 && (
            <p className={css.faqText}>
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </p>
          )}
        </li>
        <li onClick={setCardOpen4}>
          <p>[4]</p>
          <h3 className={css.faqCardTitle}>
            WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
          </h3>
          {cardOpen4 && (
            <p className={css.faqText}>
              As an NFT owner, you can own, transfer, potentially access
              exclusive content, resell, but don't automatically get copyright
              or intellectual property rights.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};
