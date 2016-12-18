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

const getVideoById = (id) => new Promise((resolve) => {
	const [video] = videos.filter(video => video.id === id);
	resolve(video);
});

exports.getVideoById = getVideoById;