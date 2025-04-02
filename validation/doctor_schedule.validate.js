<<<<<<< HEAD
const joi = require('joi')

class DoctorScheduleValidation {

    addSchedule(body) {
        const schema = joi.object({
            doctor_id: joi.number().required(),
            work_day: joi.string().required(),
            start_time: joi.string().required(),
            end_time: joi.string().required(),
            schedule_status: joi.string().required()
        })
        return schema.validate(body)

    }
    updateSchedule(body) {
        const schema = joi.object({
            doctor_id: joi.number().optional(),
            work_day: joi.string().optional(),
            start_time: joi.string().optional(),
            end_time: joi.string().optional(),
            schedule_status: joi.string().optional()
        })
        return schema.validate(body)

    }

}

=======
const joi = require('joi')

class DoctorScheduleValidation {

    addSchedule(body) {
        const schema = joi.object({
            doctor_id: joi.number().required(),
            work_day: joi.string().required(),
            start_time: joi.string().required(),
            end_time: joi.string().required(),
            schedule_status: joi.string().required()
        })
        return schema.validate(body)

    }
    updateSchedule(body) {
        const schema = joi.object({
            doctor_id: joi.number().optional(),
            work_day: joi.string().optional(),
            start_time: joi.string().optional(),
            end_time: joi.string().optional(),
            schedule_status: joi.string().optional()
        })
        return schema.validate(body)

    }

}

>>>>>>> b09cf328706a8789737302d2a9717dfa23ae708f
module.exports = new DoctorScheduleValidation