const db = require('../db-connection')

module.exports = {
    listAll(tableName) {
        return db(tableName).select('*')
    },
    updateUser(id, userInfo){
        return db('user_data')
        .update(userInfo)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    createUser(userData) {
        return db('user_data')
            .insert(userData)
            .returning('*')
            .then(record => record[0])
    },
}