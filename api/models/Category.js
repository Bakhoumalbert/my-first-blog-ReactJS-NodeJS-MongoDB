const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  // annonce de mise à jour
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
