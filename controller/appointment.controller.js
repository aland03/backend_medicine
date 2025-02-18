const validation = require('../validation/appointment.validate')
const models = require('../models/appointment.model')

class AppointmentController {
    getAllAppointment = () => {
        return (req, res) => {
            models.getAllAppointment().then(data => {
                data =
                    res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    getByIdAppointment = () => {
        return (req, res) => {
            const appointmentId = req.params.appointment_id
            models.getByIdAppointment(appointmentId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    addNewAppointmen = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addAppointment(body).error) {
                res.send(validation.addAppointment(body).error.details[0].message)
            } else {
                models.addNewAppointment(body).then(data => {
                    res.send(data)
                }).catch(err => {
                    console.log(err);
                    res.status(403).send({
                        message: "something with wrong"
                    })
                })
            }
        }
    }

    deleteAppointment = () => {
        return (req, res) => {
            const appointmentId = req.params.appointment_id
            models.deteleAppointment(appointmentId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    updateAppointment = () => {
        return (req, res) => {
            const appointmentId = req.params.appointment_id
            const body = req.body
            if (validation.updateAppointment(body).error) {
                res.send(validation.updateAppointment(body).error.details[0].message)
            } else {
                models.updateAppointment(appointmentId, body).then(data => {
                    res.send(data)
                }).catch(err => {
                    console.log(err);
                    res.status(403).send({
                        message: "something with wrong"
                    })
                })
            }
        }
    }
}

module.exports = new AppointmentController;