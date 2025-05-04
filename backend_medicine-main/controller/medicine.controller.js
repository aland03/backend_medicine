const validation = require('../validation/medicine.validate')
const models = require('../models/medicine.models')

class MedicineController {
    getAllMedicine = () => {
        return (req, res) => {
            models.getAllMedicine().then(data => {
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

    getByIdMedicine = () => {
        return (req, res) => {
            const medicineId = req.params.medicine_id
            models.getAllMedicine(medicineId).then(data => {
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

    addNewMedicine = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addMedicine(body).error) {
                res.send(validation.addMedicine(body).error.details[0].message)
            } else {
                models.addNewMedicine(body).then(data => {
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

    deleteMedicine = () => {
        return (req, res) => {
            const medicineId = req.params.medicine_id
            models.deleteMedicine(medicineId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err);
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    updateMedicine = () => {
        return (req, res) => {
            const medicineId = req.params.medicine_id
            const body = req.body
            if (validation.updateMedicine(body).error) {
                res.send(validation.updateMedicine(body).error.details[0].message)
            } else {
                models.updateMedicine(medicineId).then(data => {
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

module.exports = new MedicineController