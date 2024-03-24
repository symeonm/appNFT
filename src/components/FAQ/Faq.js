import css from "./Faq.module.css";
import { useState } from "react";

export const Faq = () => {
  const [state, setState] = useState({
    card1: false,
    card2: true,
    card3: false,
    card4: false,
  });

  function updateField(card) {
    const updateState = { ...state };

    for (let key in updateState) {
      if (key === card || updateState[key]) {
        updateState[key] = !updateState[key];
      }
    }

    setState(updateState);
  }

  return (
    <section id="#faq" className={css.faqSection}>
      <h2 className={css.faqTitle}>FAQ</h2>
      <ul className={css.cardList}>
        <li
          style={{ backgroundColor: state.card1 && "#1e1e1e" }}
          className={css.cardItem}
          onClick={() => {
            updateField("card1");
          }}
        >
          <div className={css.flexTitle}>
            <p
              style={{ width: "33px" }}
              className={`${css.numberCard} ${
                state.card1 ? css.numberCardActive : ""
              }`}
            >
              [ 1 ]
            </p>
            <h3
              className={`${css.faqCardTitle} ${
                state.card1 ? css.faqCardActive : ""
              }`}
            >
              WHAT IS AN NFT COLLECTION?
            </h3>
          </div>

          {state.card1 && (
            <p className={css.faqText}>
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </p>
          )}
        </li>
        <li
          style={{ backgroundColor: state.card2 && "#1e1e1e" }}
          className={css.cardItem}
          onClick={() => {
            updateField("card2");
          }}
        >
          <div className={css.flexTitle}>
            <p
              className={`${css.numberCard} ${
                state.card2 ? css.numberCardActive : ""
              }`}
            >
              [ 2 ]
            </p>
            <h3
              className={`${css.faqCardTitle} ${
                state.card2 ? css.faqCardActive : ""
              }`}
            >
              HOW DO I PURCHASE NFTS FROM A COLLECTION?
            </h3>
          </div>
          {state.card2 && (
            <p className={css.faqText}>
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </p>
          )}
        </li>
        <li
          style={{ backgroundColor: state.card3 && "#1e1e1e" }}
          className={css.cardItem}
          onClick={() => {
            updateField("card3");
          }}
        >
          <div className={css.flexTitle}>
            <p
              className={`${css.numberCard} ${
                state.card3 ? css.numberCardActive : ""
              }`}
            >
              [ 3 ]
            </p>
            <h3
              className={`${css.faqCardTitle} ${
                state.card3 ? css.faqCardActive : ""
              }`}
            >
              CAN I SELL OR TRADE NFTS FROM A COLLECTION?
            </h3>
          </div>
          {state.card3 && (
            <p className={css.faqText}>
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </p>
          )}
        </li>
        <li
          style={{ backgroundColor: state.card4 && "#1e1e1e" }}
          className={css.cardItem}
          onClick={() => {
            updateField("card4");
          }}
        >
          <div className={css.flexTitle}>
            <p
              className={`${css.numberCard} ${
                state.card4 ? css.numberCardActive : ""
              }`}
            >
              [ 4 ]
            </p>
            <h3
              className={`${css.faqCardTitle} ${
                state.card4 ? css.faqCardActive : ""
              }`}
            >
              WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
            </h3>
          </div>
          {state.card4 && (
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
