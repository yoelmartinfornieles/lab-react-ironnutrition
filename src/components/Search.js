import { Divider, Input } from "antd";

function Search (props) {

	//console.log ('props> ', props)
	//PORQUE NO PUEDO HACER {foodToSeach, filterFoodList} = props

	const handleSearchInput = (e) => {
		//console.log ('e; ', e.target.value)
		props.filterFoodList(e.target.value)}

	return (
		<>
		<Divider>Search</Divider>		
		<label></label>
		<Input placeholder= 'Search for a food right here, right now' value={undefined} type='text' onChange= {handleSearchInput}>
		</Input>
		</>
	)
}

export default Search
