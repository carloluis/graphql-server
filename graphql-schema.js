const { 
	GraphQLSchema, 
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');

const videoType = new GraphQLObjectType({
	name: 'Vide',
	description: 'A video on Egghead.io',
	fields: {
		id: {
			type: GraphQLID,
			description: 'The id of the video.'
		},
		title: {
			type: GraphQLString,
			description: 'The title of the video'
		},
		duration: {
			type: GraphQLInt,
			description: 'The duration of the video (in seconds).'
		},
		watched: {
			type: GraphQLBoolean,
			description: 'Whether or not the viewer has watched the video.'
		}
	}
});

const queryType = new GraphQLObjectType({
	name: 'QueryType',
	description: 'The root query type.',
	fields: {
		video: {
			type: videoType,
			resolve: () => new Promise((resolve) => {
				resolve({
					id: 'a',
					title: 'GraphQL',
					duration: 180,
					watched: false
				});
			})
		}
	}
});

const schema = new GraphQLSchema({
	query: queryType,
	/*mutation,
	suscription*/
});

module.exports = schema;