const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const {
    ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');
// Load schema & resolvers
const typeDefs = require('./schema')
const resolvers = require('./resolver')

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    });
    await server.start();

    const app = express();
    // Additional middleware can be mounted at this point to run before Apollo.

    // Mount Apollo middleware here.
    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}

startApolloServer();