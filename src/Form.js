import React from 'react'
import { useState } from 'react'
import Validation from './Validation';

const Form = () => {
  const [userList, setUserList] = useState([]);
	const [userData, setUserData] = useState({
		name: "",
		surname: "",
		email: "",
		age: "",
		gender: "",
	});

  const handleOnChange = (e) => {
    const value = e.target.value;
setUserData({
  ...userData,
  [e.target.name]: value,
});
};
console.log(userData)

	// const addUser = (e) => {
	// 	e.preventDefault();
	// 	console.log(userData);
	// 	setUserList((prevUserList) => [...prevUserList, userData]);
	// };

	// const removeUser = (id) => {
	// 	setUserList(prev =>{
	// 		const filteredUsers = prev.filter(user => user.id !==id)
	// 		return filteredUsers
	// 	})
	// }
  return (
    <div>
			{/* <form>
				<input
					type="text"
					name="name"
					value={userData.name}
					onChange={handleOnChange}
					placeholder="enter your name"
				/>
				<input
					type="text"
					name="surname"
					value={userData.surname}
					onChange={handleOnChange}
					placeholder="enter your surname"
				/>
				<input
					type="text"
					name="email"
					value={userData.email}
					onChange={handleOnChange}
					placeholder="enter your email"
				/>
				<input
					type="number"
					name="age"
					value={userData.age}
					onChange={handleOnChange}
					placeholder="enter your age"
				/>
				<input onChange={handleOnChange} type="radio" name="gender" value="male" />
				Male
				<input onChange={handleOnChange} type="radio" name="gender" value="female" />
				Female
				<button>Add User</button>
			</form>
			<button >Delete User</button>
			<button>Update User</button>
      <Validation/> */}

		</div>
	)
}

export default Form
