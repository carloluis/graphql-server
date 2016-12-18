'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const schema = buildSchema(`
type Video {
	id: ID,
	title: String,
	duration: Int,
	watched: Boolean
}

type Query {
	video: Video,
	videos: [Video]
}

type Schema {
	query: Query
}
`);

const videoA = {
	id: 'a',
	title: 'Create a GrpahQL Schema',
	duration: 256,
	watched: true
};

const videoB = {
	id: 'b',
	title: 'Use GrpahQL Primitive Types',
	duration: 117,
	watched: true
};

const videoC = {
	id: 'c',
	title: 'Use GrpahQL\'s Object Type for Basic Types',
	duration: 133,
	watched: true
};

const videoD = {
	id: 'd',
	title: "Use GrpahQL's List Type for Collections",
	duration: 145,
	watched: false
};

const videos = [videoA, videoB, videoC, videoD];

const resolvers = {
	video: () => ({
		id: '1',
		title: 'movie',
		duration: 180,
		watched: true
	}),
	videos: () => videos
};


server.use('/graphql', graphqlHTTP({
	schema, 
	graphiql: true,
	rootValue: resolvers
}));

server.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
