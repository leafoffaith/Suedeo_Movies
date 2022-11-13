// @desc    Get tests
// @route   GET /api/tests
// @access  Private
const getTests = (req, res) => {
  res.status(200).json({ message: 'Get tests' })
}

// @desc    Set test
// @route   SET /api/tests
// @access  Private
const setTest = (req, res) => {
  if (!req.body.text) {
    // Test error
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Set test' })
}

// @desc    Update test
// @route   PUT /api/tests/:id
// @access  Private
const updateTest = (req, res) => {
  res.status(200).json({ message: `Update test ${req.params.id}` })
}

// @desc    Delete test
// @route   DELETE /api/tests/:id
// @access  Private
const deleteTest = (req, res) => {
  res.status(200).json({ message: `Delete test ${req.params.id}` })
}

module.exports = {
  getTests,
  setTest,
  updateTest,
  deleteTest,
}
