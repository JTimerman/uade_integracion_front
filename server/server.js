const jsonServer = require("json-server");
const users = require("./mockData/users.json");
const holders = require("./mockData/holders.json");

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
    const { id, password, ...sentData } = possibleUser;

    res.status(200).json(sentData);
  } else {
    res.status(401).json([]);
  }
});

server.get("/holders", (req, res) => {
  res.send(holders);
});

server.post("/holders", (req, res) => {
  const { name, lastname, email, phone, address } = req.body;

  holders.push({
    name,
    lastname,
    email,
    phone,
    address,
    id: "123",
    role: "HOLDER"
  });

  const fs = require("fs");
  fs.writeFile(
    "./mockData/holders.json",
    JSON.stringify(holders),
    "utf8",
    error => {
      if (error) {
        res
          .status(300)
          .send(`Error while creating holder ${name} ${lastname}.`);
      } else {
        console.log(`New holder ${name} ${lastname} created!`);

        res.status(200).send(`New holder ${name} ${lastname} created!`);
      }
    }
  );
});

server.listen(port, () => {
  console.log("JSON Server is running in Port", port);
});
