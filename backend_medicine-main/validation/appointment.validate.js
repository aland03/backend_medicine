const joi = require('joi')

class AppointmentValidation {

    addAppointment(body) {
        const schema = joi.object({
            appointment_date: joi.string().required(),
            appointment_time: joi.string().required(),
            doctors_id: joi.number().required(),
            patient_id: joi.number().required()
        })
        return schema.validate(body)

    }
    updateAppointment(body) {
        const schema = joi.object({
            appointment_date: joi.string().optional(),
            appointment_time: joi.string().optional(),
            doctors_id: joi.number().optional(),
            patient_id: joi.number().optional()
        })
        return schema.validate(body)

    }

}

module.exports = new AppointmentValidation()