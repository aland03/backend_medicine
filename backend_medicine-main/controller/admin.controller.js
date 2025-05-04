const validation = require('../validation/admin.validate')
const models = require('../models/admin.models')

class AdminController {
    // garandnway hamw admin'akan
    getAllAdmin = () => {
        return (req, res) => {
            models.getAllAdmin().then(data => {
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
    getByIdAdmin = () => {
        return (req, res) => {
            const adminId = req.params.admin_id
            models.getByIdAdmin(adminId).then(data => {
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
    addNewAdmin = () => {
        return (req, res) => {
            const body = req.body
            if (validation.addAdmin(body).error) {
                res.send(validation.addAdmin(body).error.details[0].message)
            } else {
                models.addNewAdmin(body).then(data => {
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
    deleteAdmin = () => {
        return (req, res) => {
            const adminId = req.params.admin_id  // garandnaway paramiterek la routerakawa
            models.deteleAdmin(adminId).then(data => {
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
    updateAdmin = () => {
        return (req, res) => {
            const adminId = req.params.admin_id
            const body = req.body
            if (validation.updateAdmin(body).error) {
                res.send(validation.updateAdmin(body).error.details[0].message)
            } else {
                models.updateAdmin(adminId, body).then(data => {
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

    deleteDoctors = () => {
        return (req, res) => {
            const doctorsId = req.params.doctors_id;
            models
                .deteleDoctors(doctorsId)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(403).send({
                        message: "some thing with wrong",
                    });
                });
        };
    };
    
    activateDoctors = () => {
        return (req, res) => {
            const doctorsId = req.params.doctors_id;
            models
                .activateDoctors(doctorsId)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(403).send({
                        message: "some thing with wrong",
                    });
                });
        };
    };

    deletePatient = () => {
        return (req, res) => {
            const patientId = req.params.patinet_id  // garandnaway paramiterek la routerakawa
            models.detelePatient(patientId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }

    activatePatient = () => {
        return (req, res) => {
            const patientId = req.params.patinet_id  
            models.activatePatient(patientId).then(data => {
                res.send(data)
            }).catch((err) => {
                console.log(err)
                res.status(403).send({
                    message: 'some thing with wrong'
                })
            })
        }
    }
}

module.exports = new AdminController;