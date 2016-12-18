const videoA = {
	id: 'a',
	title: 'Create a GrpahQL Schema',
	duration: 256,
	released: true
};

const videoB = {
	id: 'b',
	title: 'Use GrpahQL Primitive Types',
	duration: 117,
	released: true
};

const videoC = {
	id: 'c',
	title: 'Use GrpahQL\'s Object Type for Basic Types',
	duration: 133,
	released: true
};

const videoD = {
	id: 'd',
	title: "Use GrpahQL's List Type for Collections",
	duration: 145,
	released: false
};

const videos = [videoA, videoB, videoC, videoD];

const getVideoById = (id) => new Promise((resolve) => {
	const [video] = videos.filter(video => video.id === id);
	resolve(video);
});

const getVideos = () => new Promise(resolve => resolve(videos));

const createVideo = ({ title, duration, released }) => {
	const video = {
		id: (new Buffer(title, 'utf8')).toString('base64'),
		title,
		duration,
		released
	};

	videos.push(video);

	return video;
};

const getObjectById = (type, id) => {
	const types = {
		video: getVideoById
	};

	return types[type](id);
};

exports.getObjectById = getObjectById;
exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;