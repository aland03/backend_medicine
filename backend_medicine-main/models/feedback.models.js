const knex = require('../connection')
const tableName = 'feedback'

class FeedbackModels {
    async getAllFeedback() {
        return await knex(tableName)
    }

    async getByIdFeedback(feedbackId) {
        return knex(tableName).where('feedback_id', feedbackId)
    }

    async addNewFeedback(body) {
        const date = Date.now()
        body.feedback_created_at = date
        body.feedback_updated_at = date
        const data = await knex(tableName).insert(body)
        const feedbackId = data[0]
        return this.getById(feedbackId)
    }

    async deteleFeedback(feedbackId) {
        const data = this.getById(feedbackId);
        await knex(tableName).where('feedback_id', feedbackId).del()
        return data
    }
    async updateFeedback(feedbackId, body) {
        const date = Date.now()
        body.feedback_updated_at = date
        await knex(tableName).where('feedback_id', feedbackId).update(body)
        return await this.getById(feedbackId)
    }
}

module.exports = new FeedbackModels;