const express = require('express')
const router = express.Router()

const queries = require('../queries/userData')

router.get('/', (req, resp, next) => {
    queries.listAll('user_data')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.put("/edit/:id", (request, response, next) => {
    queries.updateUser(request.params.id, request.body).then(userDate => {
        response.json({userDate: userDate})
    }).catch(next)
})

router.post("/new", (request, response, next) => {
    queries.createUser(request.body)
    .then(userData => {
        response.status(201).json({userData})
    })
    .catch(next);
})

router.delete("/:id", (request, response, next) => {
    queries.deleteUser(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true})
    })
    .catch(next)
})

module.exports = router