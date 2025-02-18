const validation = require('../validation/favorites.validate')
const models = require('../models/favorites.models')

class FavoritesController {
    getAllFavorites = () => {
        return (req, res) => {
            models.getAllFavorites().then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err);
                res.status(403).send({
                    message: 'some thing with wrong'
                }
                )
            })
        }
    }

    getByIdFavorites = () => {
        return (req, res) => {
            const favoritesId = req.params.favorites_id
            models.getAllFavorites(favoritesId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err);
                res.status(403).send({
                    message: 'some thing with wrong'
                }
                )
            })
        }
    }

    addNewfavorites = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addFavorites(body).error) {
                res.send(validation.addfavorites(body).error.details[0].message)
            } else {
                models.addNewFavorites(body).then(data => {
                    res.send(data)
                }).catch((err) => {
                    console.log(err);
                    res.status(403).send({
                        message: 'some thing with wrong'
                    }
                    )
                })
            }
        }
    }

    deleteFavorites = () => {
        return (req, res) => {
            const favoritesId = req.params.favorites_id
            models.deleteFavorites(favoritesId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err);
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    updatefavorites = () => {
        return (req, res) => {
            const favoritesId = req.params.favorites_id
            const body = req.body
            if (validation.updateFavorites(body).error) {
                res.send(validation.updatefavorites(body).error.details[0].message)
            } else {
                models.updateFavorites(favoritesId).then(data => {
                    res.send(data)
                }).catch((err) => {
                    console.log(err);
                    res.status(403).send({
                        message: 'some thing with wrong'
                    })
                })
            }
        }
    }
}

module.exports = new FavoritesController