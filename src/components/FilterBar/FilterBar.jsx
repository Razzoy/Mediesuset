export function FilterBar({ onClickFilter }) {
  const filter = [
    { name: "A-Å", style: "grey" },
    { name: "RØD SCENE", style: "red" },
    { name: "BLÅ SCENE", style: "blue" },
    { name: "GRØN SCENE", style: "green" },
    { name: "LILLA SCENE", style: "purple" },
  ];
  return (
    <ul>
      {filter.map((item) => {
        <li key={item.name} onClick={() => onClickFilter()}>
          {item.name}
        </li>;
      })}
    </ul>
  );
}
