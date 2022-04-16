const querystring = require("querystring");
const handleUserRouter = require("./route/user");
const handleBlogRouter = require("./route/blog");
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["Content-type"] !== "application/json") {
      resolve({});
      return;
    }

    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk;
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });

  return promise;
};

const getPath = (req) => {
  const url = req.url;
  const path = url.split("?")[0];
  return path;
};

const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json");
  req.query = querystring.parse(req.url.split("?")[1]);
  req.path = getPath(req);
  getPostData(req).then((postData) => {
    req.body = postData;

    let result = handleBlogRouter(req, res);
    if (result) {
      return res.end(JSON.stringify(result));
    }
    result = handleUserRouter(req, res);
    if (result) {
      return res.end(JSON.stringify(result));
    }
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
  });
};

module.exports = serverHandle;
