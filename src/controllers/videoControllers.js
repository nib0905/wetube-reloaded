const videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 2,
    ceratedAt: "2minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 5,
    comments: 2,
    ceratedAt: "2minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 5,
    comments: 2,
    ceratedAt: "2minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching: ${video.title}`,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // video.title = title은 지금 가짜 데베라 안 됨
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideos = {
    title: title,
    rating: 0,
    comments: 0,
    ceratedAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideos);
  return res.redirect("/");
};