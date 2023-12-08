import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles.kgItem} list-group-item ${bought && "active"}`}>
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleBuyButton(foodItem)}
      >
        Bought
      </button>
    </li>
  );
};

export default Item;
