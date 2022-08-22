import React from 'react'
import { useState } from 'react';



const AddUser = () => {
	const [userList, setUserList] = useState([]);
	const [formValues, setFormValues] = useState({
		name: "",
		surname: "",
		email: "",
		age: "",
		gender: "",
	});
	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log("submitted", formValues);
		setUserList( (prevUserList) =>{
			return [...prevUserList,{...formValues, id: new Date().toString()}]
		})
        
	};
  return (
	<div>
	{userList.map((user) => {
		return (
		<React.Fragment key={user.id}>
			<h1> username- {user.name}</h1>
			<h1> surname-{user.surname}</h1>
			<h1> email- {user.email}</h1>
			<h1>age-{user.age}</h1>
			<h1> gender-{user.gender}</h1>
		</React.Fragment>
		)
	})}
	</div>
  )
}

export default AddUser