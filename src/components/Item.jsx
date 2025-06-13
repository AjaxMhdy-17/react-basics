function Item({ item, handleDelete, handleCheck }) {
  const line = { textDecoration: "line-through" };
  return (
    <li>
      {/* <span style={item.packed == true ?  line : {}}>{item.quantity} {item.description}</span> */}
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleCheck(item.id)}
      />
      <span className={item.packed == true ? "line" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>x</button>
    </li>
  );
}

export default Item;
