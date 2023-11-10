const mongoose = require("mongoose");
const { Schema } = mongoose;

const documentSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Document", documentSchema);
