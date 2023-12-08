import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  // let [textToShow, setTextToShow] = useState();
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]; //'...'is spread operator, it basically takes all the values of foodItems array.
      setFoodItems(newItems);
      console.log("Food Value Entered : " + newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">List</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        Description: This application allows you to generate a shopping list of
        items you intend to buy.
      </Container>
    </>
  );
}

export default App;
//useState are hooks which can only be used in components and not in javascript.
