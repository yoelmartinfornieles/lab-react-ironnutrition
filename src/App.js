import "./App.css";
import foods from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"

function App() {
  const [foodArray, setFoodArray] = useState (foods)

  return (
  <div className="App">
    <ul>
    {foodArray.map ( (food) => {
      console.log (food)
      return (
        <FoodBox food={food}/>
      )}
    )}
    </ul>
  </div>
  )
}
export default App;
