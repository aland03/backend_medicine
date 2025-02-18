const knex = require('../connection')
const tableName = 'appointment'


class AppointmentModel {
    async getAllAppointment() {
        return await knex(tableName)
    }

    async getByIdAppointment(appointmentId) {
        return knex(tableName).where('appointment_id', appointmentId)
    }

    async addNewAppointment(body) {
        const date = Date.now()
        body.appointment_created_at = date
        body.appointment_updated_at = date
        const data = await knex(tableName).insert(body)
        const appointmentId = data[0]
        return this.getById(appointmentId)
    }

    async deteleAppointment(appointmentId) {
        const data = this.getById(appointmentId);
        await knex(tableName).where('appointment_id', appointmentId).del()
        return data
    }
    async updateAppointment(appointmentId, body) {
        const date = Date.now()
        body.appointment_updated_at = date
        await knex(tableName).where('appointment_id', appointmentId).update(body)
        return await this.getById(appointmentId)
    }
}

module.exports = new AppointmentModel;