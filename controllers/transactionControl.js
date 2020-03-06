// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @desc Add a transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send("POST transactions");
};

// @desc Delete a transaction
// @route GET /api/v1/transactions/:t_id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transactions");
};
