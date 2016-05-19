module.exports = {
  path: '/{param*}',
  method: 'GET',
  handler: (request, reply) => {
    reply.file('./public/index.html')
  }
}
