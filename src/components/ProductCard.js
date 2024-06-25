const styles = {
  Container: {
    width: "100%",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  },
  List: {
    listStyle: "none",
    padding: 0,
  },
  NotAvailableStatus: {
    fontSize: "14px",
    color: "lightsalmon",
  },
  AvailableStatus: {
    fontSize: "14px",
    color: "lightgreen",
  },
};

export function ProductCard({ product, background = "slategray", onPurchase }) {
  return (
    <article style={{ ...styles.Container, background }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul style={styles.List}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (From ${product.price})
        </button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p style={styles.NotAvailableStatus}>Not available</p>
  );

  const availableTemplate = (
    <p style={styles.AvailableStatus}>{stockCount} items available</p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}
