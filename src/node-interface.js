const {
	GraphQLInterfaceType,
	GraphQLNonNull,
	GraphQLID
} = require('graphql');
const { videoType } = require('./graphql-schema');

const nodeInterface = new GraphQLInterfaceType({
	name: 'NodeInterface',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolveType: (object) => {
		if(object.title){
			return videoType;
		}
		return null;
	}
});

module.exports = nodeInterface;
