const express = require("express")

const router = express.Router()

// @route  GET api/contacts
// @desc   GET all user constacts
// @access Private
router.get('/', (req, res) => {
    res.send("Get all contacts")
})

// @route  POST api/contacts
// @desc   Register all user constacts
// @access Private
router.post('/', (req, res) => {
    res.send("Register a user")
})

// @route  PUT api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
    res.send("Update contact")
})

// @route  PUT api/contacts/:id
// @desc   Delete contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send("Delete contact")
})

module.exports = router