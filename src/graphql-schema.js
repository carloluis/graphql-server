const { 
	GraphQLSchema, 
	GraphQLObjectType,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql');
const { getVideoById, getVideos } = require('./data');

const videoType = new GraphQLObjectType({
	name: 'Video',
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
		videos: {
			type: new GraphQLList(videoType),
			resolve: getVideos
		},
		video: {
			type: videoType,
			args:{
				id:{
					type: new GraphQLNonNull(GraphQLID),
					description: 'The id of the video.'
				}
			},
			resolve: (_, args) => {
				return getVideoById(args.id);
			}
		}
	}
});

const schema = new GraphQLSchema({
	query: queryType
});

module.exports = schema;