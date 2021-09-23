import { Divider, Input } from "antd";
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
		<form onSubmit = {handleSubmit}>	
			<Divider>Add Food Entry</Divider>

			<label>Name</label>
			<Input placeholder='Food Name' value={name} type="text" onChange={handleNameImput} />

			<label>Image</label>
			<Input placeholder='Image URL' value={image} type="text" onChange={handleImageInput} />

			<label>Calories</label>
			<Input placeholder='Calories per serving' value={calories} type="number" onChange={handleCaloriesInput} />

			<label>Servings</label>
			<Input placeholder='Servings' value={servings} type="number" onChange={handleServingsInput} />

			<button type="submit">Create</button>
		</form>
		</>
	)


}

export default AddFoodForm;
