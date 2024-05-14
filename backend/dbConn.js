var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'sql11.freesqldatabase.com',
        port: '3306',
        user: 'sql11706256',
        password: 'IPPPbqKsgI',
        database: 'sql11706256',
        charset: 'utf8mb4'
    }
});

module.exports = knex;