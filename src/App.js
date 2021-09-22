import "./App.css";
import foods from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"
import { Button } from "antd";


function App() {
  const [foodArray, setFoodArray] = useState (foods)
  const [foodToPrint, setFoodToPrint] = useState (foods)
  const [expand, setExpand] = useState (false)

  const handleExpandButton = () => {
    console.log (expand)
    setExpand(!expand)
  }

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

  const deleteFood = (foodToDelete) => {
    console.log('foodToDelete: ', foodToDelete)
    let filteredFoods = foodArray.filter( (food) => {
      return (food.name !== foodToDelete.name)
    })
    setFoodArray (filteredFoods);
    setFoodToPrint (filteredFoods);
  }

  return (
    <div className="App">
      <Search foodToSearch = {foodArray} filterFoodList = {filterFoodList} />

      <Button onClick={handleExpandButton} >
        {expand ? 'Hide Form' : 'Add New Food'}
      </Button>
      {expand && <AddFoodForm addFood = {addFood} />}

      <ul>
      {foodToPrint.map ( (food) => {
        //console.log (food)
        return (
          <FoodBox food={food} deleteFood={deleteFood} />
        )}
      )}
      </ul>
    </div>
  )
}
export default App;
