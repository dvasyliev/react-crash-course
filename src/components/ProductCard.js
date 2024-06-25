export function ProductCard() {
  return (
    <article>
      <h2>iPhone 15 Pro</h2>
      <img
        src="images/iphone.png"
        alt="iPhone 15 Pro"
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul>
        <li>A17 Pro chip with 6-core GPU</li>
        <li>3x or 5x Telephoto camera</li>
        <li>Up to 29 hours video playback</li>
      </ul>
      <button>Buy (From $999)</button>
    </article>
  );
}
