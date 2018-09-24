const express = require('express')
const router = express.Router()

const queries = require('../queries/connections')

router.get('/', (req, resp, next) => {
    queries.listAll('connections')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.put("/edit/:id", (request, response, next) => {
    queries.updateConnection(request.params.id, request.body).then(connection => {
        response.json({connection: connection})
    }).catch(next)
})

router.post("/new", (request, response, next) => {
    queries.createConnection(request.body)
    .then(connection => {
        response.status(201).json({connection})
    })
    .catch(next)
})

router.delete("/:id", (request, response, next) => {
    queries.deleteConnection(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true})
    })
    .catch(next)
})

module.exports = router