'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, resolvers } = require('./initial-graphql-schema');

const PORT = process.env.PORT || 3000;
const server = express();

server.use('/graphql', graphqlHTTP({
	schema, 
	graphiql: true,
	rootValue: resolvers
}));

server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
