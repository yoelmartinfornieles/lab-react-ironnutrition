import "./App.css";
import foods from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"

function App() {
  const [foodArray, setFoodArray] = useState (foods)
  const [foodToPrint, setFoodToPrint] = useState (foods)

  const addFood = (newFood) => {
    const updatedFoods = [...foodArray, newFood]
    setFoodArray (updatedFoods)
  }

  const filterFoodList = (foodToSearch) => {
    console.log ('foodToSearch: ', foodToSearch)
    let searchArray = [...foodArray]
    let filteredFoods;

    if (foodToSearch === "") {
      filteredFoods = searchArray;
    } else {
      filteredFoods = searchArray.filter( (food) => {
          console.log ('food: ', food.name)
          console.log ('include: ', food.name.toLowerCase().includes (foodToSearch.toLowerCase()))
          return (food.name.toLowerCase().includes (foodToSearch.toLowerCase()))
        });
    }
    console.log('filteredFoods: ', filteredFoods)
    setFoodToPrint(filteredFoods);
  };

  return (
    <div className="App">
      <Search foodToSearch = {foodArray} filterFoodList = {filterFoodList} />
      <AddFoodForm addFood = {addFood} />
      <ul>
      {foodToPrint.map ( (food) => {
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
