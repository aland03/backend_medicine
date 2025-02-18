const joi = require('joi')

class FavoritesValidations{
    addFavorites(body){
        const schema = joi.object({
            doctors_id: joi.number().required(),
            patient_id: joi.number().required()
        })
        return schema.validate(body)
    }
    updateFavorites(body){
        const schema = joi.object({
            doctors_id: joi.number().optional(),
            patient_id: joi.number().optional()
        })
        return schema.validate(body)
    }
}

module.exports = new FavoritesValidations