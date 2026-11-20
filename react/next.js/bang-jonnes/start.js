const register =
  require("@babel/register").default || require("@babel/register");

register({
  extensions: [".js", ".jsx"],
});

require("./server.js");
