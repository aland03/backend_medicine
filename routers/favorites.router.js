const controller = require('../controller/favorites.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllFavorites())

app.get('/get-by-id/:favorites_id', controller.getByIdFavorites())

app.post('/add-new', controller.addNewfavorites())

app.put('/update/:favorites_id', controller.updatefavorites())

app.delete('/delete/:favorites_id', controller.deleteFavorites())

module.exports = app