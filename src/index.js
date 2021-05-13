const server = require('./graphql/server');

server.listen().then(({ url }) => {
  console.log(`\n*** Server listening at ${url} ***\n`);
});
