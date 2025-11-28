const express = require("express")
const authmiddleware = require("../middleware/authmiddleware")
const router = express.Router()

router.get("/dashboard", authmiddleware, (req, res) => {
    // res.status(200).json({ "message": "dashboard route" })
    res.json({ "message": "welcome to the website", user: req.user })
})

module.exports = router