const controller = require('../controller/radiology.controller')
const auth = require("../middlewares/auth_middleware");
const express = require('express')
const app = express()

app.get('/get-all', auth.validToken(), controller.getAllRadiology())

app.get('/get-by-id/:radiology_id', auth.validToken(), controller.getByIdRadiology())

app.post('/add-new', auth.validToken(), controller.addNewRadiology())

app.put('/update/:radiology_id', auth.validToken(), controller.updateRadiology())

app.delete('/delete/:radiology_id', auth.validToken(), controller.deleteRadiology())


module.exports = app