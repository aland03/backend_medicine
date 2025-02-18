const controller = require('../controller/feedback.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllFeedback())

app.get('/get-by-id/:feedback_id', controller.getByIdFeedback())

app.post('/add-new', controller.addNewFeedback())

app.put('/update/:feedback_id', controller.updateFeedback())

app.delete('/delete/:feedback_id', controller.deleteFeedback())

module.exports = app;