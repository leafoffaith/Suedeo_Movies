const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, 'Please add a user value'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
