import { useState } from "react";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, background = "slategray", onPurchase }) {
  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setStockCount(stockCount - 1);
    onPurchase(product);
  }

  return (
    <article className={styles.Container} style={{ background }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>
        Specification:{" "}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "hide" : "show"}
        </button>
      </p>
      {showMore && (
        <ul className={styles.Specification}>
          {product.specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      )}
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <button onClick={handleClick}>Buy (From ${product.price})</button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={styles.NotAvailableStatus}>Not available</p>
  );

  const availableTemplate = (
    <p className={styles.AvailableStatus}>{stockCount} items available</p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}
