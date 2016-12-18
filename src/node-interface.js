const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
const { getObjectById } = require('./data');

const { nodeInterface, nodeField } = nodeDefinitions(
	(globalId) => {
		const { type, id } = fromGlobalId(globalId);
		return getObjectById(type.toLowerCase(), id);
	},
	(object) => {
		const { videoType } = require('./graphql-schema');
		if(object.title){
			return videoType;
		}
		return null;
	}
);

module.exports = {
	nodeInterface,
	nodeField
};
