const jsonServer = require("json-server");
const users = require("./mockData/users.json");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post("/signin", (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);
  console.log(
    `Tried to signin with username: ${username} and password: ${password}`
  );

  const possibleUser = users.find(
    user => user.id === username && user.password === password
  );

  if (possibleUser) {
    res.status(200).json(possibleUser.roles);
  } else {
    res.status(401).json([]);
  }
});

server.listen(port, () => {
  console.log("JSON Server is running in Port", port);
});
