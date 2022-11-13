const express = require('express')
const { update } = require('tar')
const router = express.Router()
const {
  getTests,
  setTest,
  updateTest,
  deleteTest,
} = require('../controllers/testController')

// Runs functions at these routes, need :id for updating and deleting
router.route('/').get(getTests).post(setTest)
router.route('/:id').put(updateTest).delete(deleteTest)

module.exports = router
