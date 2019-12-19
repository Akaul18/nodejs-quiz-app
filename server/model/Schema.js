const mongoose = require("mongoose");

const quesansSchema = new mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array
});

module.exports = mongoose.model("Quesans", quesansSchema);
