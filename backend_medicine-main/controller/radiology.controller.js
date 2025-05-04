const validation = require('../validation/radiology.validate')
const models = require('../models/radiology.models')

class RadiologyController {
    getAllRadiology = () => {
        return (req, res) => {
            models.getAllRadiology().then(data => {
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

    getByIdRadiology = () => {
        return (req, res) => {
            const radiologyId = req.params.radiology_id
            models.getAllRadiology(radiologyId).then(data => {
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

    addNewRadiology = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addRadiology(body).error) {
                res.send(validation.addRadiology(body).error.details[0].message)
            } else {
                models.addNewRadiology(body).then(data => {
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

    deleteRadiology = () => {
        return (req, res) => {
            const radiologyId = req.params.radiology_id
            models.deleteRadiology(radiologyId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err);
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    updateRadiology = () => {
        return (req, res) => {
            const radiologyId = req.params.radiology_id
            const body = req.body
            if (validation.updateRadiology(body).error) {
                res.send(validation.updateRadiology(body).error.details[0].message)
            } else {
                models.updateRadiology(radiologyId).then(data => {
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

module.exports = new radiologyController