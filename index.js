const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
