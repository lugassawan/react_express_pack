const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get(`/api/customers`, (req, res) => {
	const customers = [
		{ id: 1, firstName: "Lugas", lastName: "Doe" },
		{ id: 2, firstName: "Will", lastName: "Math" },
		{ id: 3, firstName: "Jhon", lastName: "Kuna" }
	];

	res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
