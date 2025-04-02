const joi = require('joi')

class FeedbackValidation {

    addFeedback(body) {
        const schema = joi.object({
            feedback_rate: joi.number().required(),
            feedback_detail: joi.string().required(),
            patient_id: joi.number().required(),
            appointment_id: joi.number().required()
        })
        return schema.validate(body)
    }

    updateFeedback(body) {
        const schema = joi.object({
            feedback_rate: joi.number().optional(),
            feedback_detail: joi.string().optional(),
            patient_id: joi.number().optional(),
            appointment_id: joi.number().optional()
        })
        return schema.validate(body)
    }
}

module.exports = new FeedbackValidation;