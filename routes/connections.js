const express = require('express')
const router = express.Router()

const queries = require('../queries/connections')

router.get('/', (req, resp, next) => {
    queries.listAll('connections')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.delete("/:id", (request, response, next) => {
    queries.deleteConnection(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true});
    })
    .catch(next);
});

module.exports = router