const knex = require('../connection')
const tableName = 'favorites'

class FavoritesModels {
    async getAllFavorites() {
        return await knex(tableName)
    }

    async getByIdFavorites(favoritesId) {
        return await knex(tableName).where('favorites_id', favoritesId)
    }

    async addNewFavorites(body) {
        const date = Date.now()
        body.favorites_created_at = date
        body.favorites_update_at = date
        const data = await knex(tableName).insert(body)
        const favoritesId = data[0]
        return this.getById(favoritesId)
    }

    async deleteFavorites(favoritesId) {
        const data = this.getById(favoritesId)
        await knex(tableName).where('favorites_id', favoritesId).del()
        return data
    }

    async updateFavorites(favoritesId, body) {
        const date = Date.now()
        body.favorites_update_at = date
        await knex(tableName).where('favorites_id', favoritesId).update(body)
        return this.getById(favoritesId)
    }
}

module.exports = new FavoritesModels