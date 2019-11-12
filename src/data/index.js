const videoA = {
  id: "a",
  title: "Murdered by Words",
  duration: 144,
  watched: false
};

const videoB = {
  id: "b",
  title: "Murdered by Knives",
  duration: 132,
  watched: true
};

const videos = [videoA, videoB];
const getVideoById = id =>
  new Promise(resolve => {
    const [video] = videos.filter(video => {
      return video.id === id;
    });
    resolve(video);
  });

exports.getVideoById = getVideoById;
