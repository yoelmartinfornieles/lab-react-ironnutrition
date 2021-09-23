import "./App.css";
import foods from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"
import { Row, Divider, Button } from "antd";


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
    setFoodToPrint (updatedFoods)
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

      <Button onClick={handleExpandButton} >
        {expand ? 'Hide Form' : 'Add New Food'}
      </Button>
      {expand && <AddFoodForm addFood = {addFood} />}

      <Search foodToSearch = {foodArray} filterFoodList = {filterFoodList} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>

      {foodToPrint.length !== 0 ? (
          foodToPrint.map ( (food) => {
          //console.log (food)
          return (
            <FoodBox food={food} deleteFood={deleteFood} />
            )
          })
        ) 
        : 
        (<div className="noFood">
			    <h3>Ooops! There is no more content to show.</h3>
          <p className="empty">ø</p>
		    </div>)
      }
      
      </Row>
    </div>
  )
}
export default App;