//glabal 컨트롤러는 user controller에 들어간다
// 회원가입을 하는게 user 이므로!

export const join = (req, res) => res.send("join");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log Out");
export const see = (req, res) => res.send("see");
