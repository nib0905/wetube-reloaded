export const localsMiddleware = (req, res, next) => {
  console.log("in middleware.js", req.session);
  //이부분 잘 확인하기!
  //req가 아니라 re"s" locals 이다. req.session의 loggedIn은
  //controller에서 추가해준 부분이고 locals에 넣어야 pug에서 접근 가능하다.
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
