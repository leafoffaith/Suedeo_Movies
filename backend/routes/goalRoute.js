const express = require('express')
const { update } = require('tar')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

<<<<<<< HEAD
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
=======
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router
>>>>>>> 62e134cd48a85df752760c4faa803ca0c65a36e4
