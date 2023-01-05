//database부분

import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server Listening on port http//localhost:${PORT}`);

app.listen(PORT, handleListening);
//app을 시작 시켜주기 위해서는 server.js에서 시작하는게 아니라 init.js로 시작을 해줘야함
