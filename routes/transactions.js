const express = require("express");
const transactionsRouter = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactionControl");

// transactionsRouter.get("/", (req, res) => {
//   res.send("Transactions router");
// });

transactionsRouter
  .route("/")
  .get(getTransactions)
  .post(addTransaction);

transactionsRouter.route("/:t_id").delete(deleteTransaction);

module.exports = transactionsRouter;
