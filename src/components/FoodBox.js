import { Card, Col, Button } from "antd";

function FoodBox (props) {
	//console.log ("props: ", props)
	let food = props.food;
	//console.log ("food: ",food);
	let deleteFood = props.deleteFood;

	const handleDeleteButton = () => {
		deleteFood(food);
	}

	return (
		<>
		<Col>
			<Card
			title={food.name}
			style={{ width: 230, height: 300, margin: 10 }}
			>
				<img src={food.image} alt={food.name} height={60} />
				<p>Calories: {food.calories}</p>
				<p>Servings: {food.servings}</p>
				<p>
				<b>Total Calories: {food.calories * food.servings}</b> kcal
				</p>
				<Button type="primary" onClick={handleDeleteButton}> Delete </Button>
			</Card>
		</Col>
		</>
	)
}

export default FoodBox;