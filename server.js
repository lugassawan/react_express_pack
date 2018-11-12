const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get(`/api/emails`, (req, res) => {
	const emails = [
		{ id: 1, email: "jhon@gmail.com" },
		{ id: 2, email: "will@gmail.com" },
		{ id: 3, email: "doejhon@gmail.com" }
	];

	res.json(emails);
});

app.get(`/api/customers`, (req, res) => {
	const customers = [
		{ id: 1, firstName: "Lugas", lastName: "Doe" },
		{ id: 2, firstName: "Will", lastName: "Math" },
		{ id: 3, firstName: "Jhon", lastName: "Kuna" }
	];

	res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
