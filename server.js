const fastify = require('fastify')()
const teams = require('./mocks/teams.js')

fastify.register(require('fastify-cors'))

fastify.get('/teams', async (request, reply) => {
  return teams
})

fastify.get('/team/:team', async (request, reply) => {
    return require(`./mocks/team.${request.params.team}.js`)
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
