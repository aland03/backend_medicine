const validation = require('../validation/doctor_schedule.validate')
const models = require('../models/doctor_schedule.models')

class DoctorScheduleController {
    // garandnway hamw admin'akan
    getAllDoctorSchedule = () => {
        return (req, res) => {
            models.getAllDoctorSchedule().then(data => {
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
    //garandnaway admin bapey ID
    getByIdDoctorSchedule = () => {
        return (req, res) => {
            const scheduleId = req.params.schedule_id
            models.getByIdDoctorSchedule(scheduleId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }
    // zyad krdny adminy taza
    addNewDoctorSchedule = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addSchedule(body).error) {
                res.send(validation.addSchedule(body).error.details[0].message)
            } else {
                models.addNewDoctorSchedule(body).then(data => {
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
    // bo delete krdny admin
    deleteDoctorSchedule = () => {
        return (req, res) => {
            const scheduleId = req.params.schedule_id  // garandnaway paramiterek la routerakawa
            models.deteleDoctorSchedule(scheduleId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }
    //bo update krdny admin
    updateDoctorSchedule = () => {
        return (req, res) => {
            const scheduleId = req.params.schedule_id
            const body = req.body
            if (validation.updateSchedule(body).error) {
                res.send(validation.updateSchedule(body).error.details[0].message)
            } else {
                models.updateDoctorSchedule(scheduleId, body).then(data => {
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

module.exports = new DoctorScheduleController;