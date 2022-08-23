import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Axios = () => {
    const [formValues,setFormValues] = useState([])
	const bodyFormData = new FormData();
	bodyFormData.append(formValues,setFormValues);

	axios({
		method: "post",
		url: "http://localhost:3001/users ",
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	})
		.then(function (response) {
			//handle success
			console.log(response);
		})
		.catch(function (response) {
			//handle error
			console.log(response);
		});
	return <div></div>;
};

export default Axios;
