import styles from "./ProductList.module.css";

export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div className={styles.List}>{props.children}</div>
    </>
  );
}
