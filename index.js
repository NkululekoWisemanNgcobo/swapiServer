const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const PeopleAPI = require("./people");
const resolvers = require("./resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    PeopleAPI: new PeopleAPI()
  })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
