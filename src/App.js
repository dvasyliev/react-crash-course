import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

function App() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };

  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductList>
    </div>
  );
}

export default App;
