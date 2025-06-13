function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const list = items.length;
  const packed = items.filter((item) => item.packed == true).length;
  const percentage = Math.round((packed / list) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything to go."
          : `
          You have ${list} items on your list, and you already packed (${percentage}%)
        `}
      </em>
    </footer>
  );
}
export default Stats;
