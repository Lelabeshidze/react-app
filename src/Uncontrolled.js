import React, { useRef, useState } from "react";

const Uncontrolled = () => {
	const nameRef = useRef(undefined);
	const surnameRef = useRef(undefined);
	const emailRef = useRef(undefined);
	const ageRef = useRef(undefined);
	const genderRef = useRef(undefined);
	const [formErrors, setFormErrors] = useState({});
	const [userList, setUserList] = useState([]);
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const surname = surnameRef.current.value;
		const email = emailRef.current.value;
		const age = ageRef.current.value;
		const gender = genderRef.current.value;
		const userData = { name, surname, email, age, gender };
		const validationResult = validate(userData);
		if (
			validationResult.name ||
			validationResult.surname ||
			validationResult.email ||
			validationResult.age ||
			validationResult.gender
		) {
			setFormErrors(validationResult);
		} else {
			console.log("submitted", userData);
			setUserList((prevUserList) => {
				return [...prevUserList, { ...userData, id: new Date().toString() }];
			});
		}
	};
	const validate = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = "Name is required";
		} else if (values.name.length < 4) {
			errors.name = "Name must contain minimum four symbol";
		}
		if (!values.surname) {
			errors.surname = "Surname is required";
		} else if (values.surname.length < 4) {
			errors.surname = "Surname must contain minimum four symbol";
		}
		if (values.email && !values.email.includes("@gmail.com")) {
			errors.email = "This is not a valid email format";
		}
		if (values.age && values.age < 18) {
			errors.age = "Age must be 18+";
		}
		if (!values.gender) {
			errors.gender = "Gender is required";
		}
		return errors;
	};
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<h1>Login Form</h1>
				<div>
					<div>
						<label style={{ color: "green" }}>Name</label>
					</div>
					<input
						type="text"
						name="name"
						placeholder="enter your name"
						ref={nameRef}
					/>
				</div>
				<h4 style={{ color: "red" }}>
					{formErrors.name && <p>{formErrors.name}</p>}
				</h4>
				<div>
					<div>
						<label style={{ color: "green" }}>Surname</label>
					</div>
					<input
						type="text"
						name="surname"
						placeholder="enter your surname"
						ref={surnameRef}
					/>
				</div>
				<h4 style={{ color: "red" }}>
					{formErrors.surname && <p>{formErrors.surname}</p>}
				</h4>
				<div>
					<div>
						<label style={{ color: "green" }}>Email</label>
					</div>
					<input
						type="text"
						name="email"
						placeholder="enter your email"
						ref={emailRef}
					/>
				</div>
				<h4 style={{ color: "red" }}>
					{formErrors.email && <p>{formErrors.email}</p>}
				</h4>
				<div>
					<div>
						<label style={{ color: "green" }}>Age</label>
					</div>
					<input
						type="number"
						name="age"
						placeholder="enter your age"
						ref={ageRef}
					/>
				</div>
				<h4 style={{ color: "red" }}>
					{formErrors.age && <p>{formErrors.age}</p>}
				</h4>
				<div>
					<div>
						<label style={{ color: "green" }}>Gender</label>
					</div>
					<input type="radio" name="gender" ref={genderRef} value="Male" />
					Male
					<input type="radio" name="gender" ref={genderRef} value="Female" />
					Female
				</div>
				<h4 style={{ color: "red" }}>
					{formErrors.gender && <p>{formErrors.gender}</p>}
				</h4>
				<button>Add User</button>
			</form>
			<button>Delete User</button>
			<button>Update User</button>
			{userList.map((user) => {
				return (
					<React.Fragment key={user.id}>
						<h1> username- {user.name}</h1>
						<h1> surname-{user.surname}</h1>
						<h1> email- {user.email}</h1>
						<h1>age-{user.age}</h1>
						<h1> gender-{user.gender}</h1>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Uncontrolled;
