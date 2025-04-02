const knex = require('../connection')
const tableName = 'radiology'

class RadiologyModels {
    async getAllRadiology() {
        return await knex(tableName)
    }

    async getByIdRadiology(radiologyId) {
        return await knex(tableName).where('radiology_id', radiologyId)
    }

    async addNewRadiology(body) {
        const date = Date.now()
        body.radiology_created_at = date
        body.radiology_update_at = date
        const data = await knex(tableName).insert(body)
        const radiologyId = data[0]
        return this.getById(radiologyId)
    }

    async deleteRadiology(radiologyId) {
        const data = this.getById(radiologyId)
        await knex(tableName).where('radiology_id', radiologyId).del()
        return data
    }

    async updateRadiology(radiologyId, body) {
        const date = Date.now()
        body.radiology_update_at = date
        await knex(tableName).where('radiology_id', radiologyId).update(body)
        return this.getById(radiologyId)
    }
}

module.exports = new RadiologyModels