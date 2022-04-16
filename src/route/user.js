const { login } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("登陆失败");
    }
  }
};

module.exports = handleUserRouter;
