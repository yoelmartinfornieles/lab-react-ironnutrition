import "./App.css";
import foods from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodArray, setFoodArray] = useState (foods)
  const addFood = (newFood) => {
    const updatedFoods = [...foodArray, newFood]
    setFoodArray (updatedFoods)
  }

  return (
    <div className="App">
      <AddFoodForm addFood = {addFood}/>
      <ul>
      {foodArray.map ( (food) => {
        //console.log (food)
        return (
          <FoodBox food={food} />
        )}
      )}
      </ul>
    </div>
  )
}
export default App;
