export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "36px" }}>
        {props.children}
      </div>
    </>
  );
}
