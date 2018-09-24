
exports.up = function(knex, Promise) {
    return knex.schema.createTable('connections', (table) => {
        table.increments()
        table.float('location_x').notNullable()
        table.float('location_y').notNullable()
        table.integer('gene').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('connections')

};
