const express = require('express')
const router = express.Router()

const queries = require('../queries/connections')

router.get('/', (req, resp, next) => {
    queries.listAll('connections')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.post("/new", (request, response, next) => {
    queries.createUser(request.body)
    .then(userData => {
        response.status(201).json({userData})
    })
    .catch(next);
})



module.exports = router