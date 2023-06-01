const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const expensesRouter = require("./routes/expenses-router");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
