import styles from "./ProductCard.module.css";

export function ProductCard({ product, background = "slategray", onPurchase }) {
  let stockCount = product.stockCount;

  function handleClick() {
    stockCount = stockCount - 1;
    console.log("stockCount", stockCount);
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
      <p>Specification:</p>
      <ul className={styles.Specification}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
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
