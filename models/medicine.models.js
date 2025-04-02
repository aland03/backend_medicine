const knex = require('../connection')
const tableName = 'medicine'

class MedicineModels {
    async getAllMedicine() {
        return await knex(tableName)
    }

    async getByIdMedicine(medicineId) {
        return await knex(tableName).where('medicine_id', medicineId)
    }

    async addNewMedicine(body) {
        const date = Date.now()
        body.medicine_created_at = date
        body.medicine_update_at = date
        const data = await knex(tableName).insert(body)
        const medicineId = data[0]
        return this.getById(medicineId)
    }

    async deleteMedicine(medicineId) {
        const data = this.getById(medicineId)
        await knex(tableName).where('medicine_id', medicineId).del()
        return data
    }

    async updateMedicine(medicineId, body) {
        const date = Date.now()
        body.medicine_update_at = date
        await knex(tableName).where('medicine_id', medicineId).update(body)
        return this.getById(medicineId)
    }
}

module.exports = new MedicineModels