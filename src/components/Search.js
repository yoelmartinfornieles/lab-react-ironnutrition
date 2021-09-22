import { Input } from "antd";
import {useState} from 'react'

function Search (props) {

	//console.log ('props> ', props)
	//PORQUE NO PUEDO HACER {foodToSeach, filterFoodList} = props

	const handleSearchInput = (e) => {
		//console.log ('e; ', e.target.value)
		props.filterFoodList(e.target.value)}

	return (
		<>
		<h2>SearchBar</h2>
		<Input type='text' onChange= {handleSearchInput}>
		</Input>
		</>
	)
}

export default Search