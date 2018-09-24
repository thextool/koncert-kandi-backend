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
    updateConnection(id, connection){
        return db('connections')
        .update(connection)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    createConnection(connection) {
        return db('connections')
            .insert(connection)
            .returning('*')
            .then(record => record[0])
    },
}