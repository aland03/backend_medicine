const knex = require('../connection')
const tableName = 'admin'


class AdminModel {

    async getAllAdmin() {
        return await knex(tableName).whereNot('admin_status', 'deactive')
    }

    async getByIdAdmin(adminId) {
        if ((await knex(tableName).where('admin_id', adminId)).map(data => data.admin_status) == 'active') {
            return knex(tableName).where('admin_id', adminId)
        } else {
            return 'ئەم ئەدمینە نەدۆزرایەوە'
        }
    }

    async addNewAdmin(body) {
        const date = Date.now()
        body.admin_created_at = date
        body.admin_updated_at = date
        const data = await knex(tableName).insert(body)
        const adminId = data[0]
        return this.getById(adminId)
    }

    async deteleAdmin(adminId) {
        if ((await knex(tableName).where('admin_id', adminId)).map(data => data.admin_status) == 'deactive') {
            return 'this admin with id ' + adminId + ' is deleted before'
        }
        const data = await knex(tableName).where('admin_id', adminId).update({
            admin_status: 'deactive'
        })
        return await knex(tableName).where('admin_id', adminId)
    }
    async updateAdmin(adminId, body) {
        const date = Date.now()
        body.admin_updated_at = date
        await knex(tableName).where('admin_id', adminId).update(body)
        return await this.getById(adminId)
    }
}

module.exports = new AdminModel