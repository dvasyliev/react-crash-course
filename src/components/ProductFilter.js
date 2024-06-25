export function ProductFilter({ filters, onFilter }) {
  return (
    <div>
      Price: $
      <input
        defaultValue={filters.price.min}
        type="number"
        min={0}
        max={999}
        onChange={(event) => onFilter("min", event.target.value)}
      />{" "}
      - $
      <input
        defaultValue={filters.price.max}
        type="number"
        min={0}
        max={999}
        onChange={(event) => onFilter("max", event.target.value)}
      />
    </div>
  );
}
