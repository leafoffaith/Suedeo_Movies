const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
<<<<<<< HEAD
=======
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
>>>>>>> 62e134cd48a85df752760c4faa803ca0c65a36e4
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
