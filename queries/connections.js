const db = require('../db-connection')

module.exports = {
    listAll(tableName) {
        return db(tableName).select('*')
    },
    deleteConnection(id) {
        return db('connections')
        .delete()
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },

}