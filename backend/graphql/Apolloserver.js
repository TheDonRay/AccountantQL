const { ApolloServer } = require('@apollo/server');

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server;
