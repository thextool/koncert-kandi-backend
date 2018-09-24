module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost:/koncert_kandi'  
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
