const knex = require('../connection')
const tableName = 'doctor_schedule'


class DoctorScheduleModel {

    async getAllDoctorSchedule() {
        return await knex(tableName).whereNot('schedule_status', 'deactive')
    }

    async getByIdDoctorSchedule(scheduleId) {
        if ((await knex(tableName).where('schedule_id', scheduleId)).map(data => data.schedule_status) == 'active') {
            return knex(tableName).where('schedule_id', scheduleId)
        } else {
            return '!!ئەم خشتیە نەدۆزرایەوە'
        }
    }

    async addNewDoctorSchedule(body) {
        const date = Date.now()
        body.created_at = date
        body.updated_at = date
        const data = await knex(tableName).insert(body)
        const scheduleId = data[0]
        return this.getById(scheduleId)
    }

    async deteleDoctorSchedule(scheduleId) {
        if ((await knex(tableName).where('schedule_id', scheduleId)).map(data => data.schedule_status) == 'deactive') {
            return 'this schedule with id ' + scheduleId + ' is deleted before'
        }
        const data = await knex(tableName).where('schedule_id', scheduleId).update({
            schedule_status: 'deactive'
        })
        return await knex(tableName).where('schedule_id', scheduleId)
    }
    async updateDoctorSchedule(scheduleId, body) {
        const date = Date.now()
        body.updated_at = date
        await knex(tableName).where('schedule_id', scheduleId).update(body)
        return await this.getById(scheduleId)
    }
}

module.exports = new DoctorScheduleModel