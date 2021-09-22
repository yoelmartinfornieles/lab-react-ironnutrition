import { Input } from "antd";
import {useState} from 'react'

function AddFoodForm (props) {

	const addFood = props.addFood

	const [name, setName] = useState ('')
	const [calories, setCalories] = useState ('')
	const [image, setImage] = useState ('')
	const [servings, setServings] = useState ('')

	const handleNameImput = (e) => setName (e.target.value)
	const handleCaloriesInput = (e) => setCalories (e.target.value)
	const handleImageInput = (e) => setImage (e.target.value)
	const handleServingsInput = (e) => setServings (e.target.value)

	const handleSubmit = (e) => {
		console.log ('hey');
		e.preventDefault();
		const newFood = {name, calories, image, servings}
		console.log ('newFood: ', newFood)
		
		addFood (newFood)

		setName('')
		setCalories('')
		setImage('')
		setServings('')
	}

	return (
		<>
		<h2>Add Food</h2>	
		<form onSubmit = {handleSubmit}>		
			<Input value={name} type="text" onChange={handleNameImput} />
			<Input value={calories} type="text" onChange={handleCaloriesInput} />
			<Input value={image} type="text" onChange={handleImageInput} />
			<Input value={servings} type="text" onChange={handleServingsInput} />
			<button type="submit">Create</button>
		</form>
		</>
	)


}

export default AddFoodForm;