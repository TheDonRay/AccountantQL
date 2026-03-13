// import the server here as such 
const { ApolloServer } = require('@apollo/server'); 
// import your resolvers and typeDefs 
const { FinanceResolvers, MutationResolver } = require('../graphql/Resolvers/finances.resolvers.js'); 
const { finances } = require('../graphql/TypeDefs/finances.definition.js');   

const apolloserver = new ApolloServer({ 
    typeDefs: [finances], 
    resolvers: [FinanceResolvers, MutationResolver], 
}); 

module.exports = apolloserver; 