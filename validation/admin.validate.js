const joi = require('joi')

class AdminValidation {

    addAdmin(body) {
        const schema = joi.object({
            admin_username: joi.string().required(),
            admin_password: joi.string().required(),
            admin_role: joi.string().required()
        })
        return schema.validate(body)

    }
    updateAdmin(body) {
        const schema = joi.object({
            admin_id: joi.number().optional(),
            admin_username: joi.string().optional(),
            admin_password: joi.string().optional(),
            admin_role: joi.string().allow('super', 'patient', 'doctor').optional()
        })
        return schema.validate(body)

    }

}

module.exports = new AdminValidation()