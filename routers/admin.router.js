const controller = require('../controller/admin.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllAdmin())

app.get('/get-by-id/:admin_id', controller.getByIdAdmin())

app.post('/add-new', controller.addNewAdmin())

app.delete('/delete/:admin_id', controller.deleteAdmin())

app.put('/update/:admin_id', controller.updateAdmin())
module.exports = app