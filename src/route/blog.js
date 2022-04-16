const {
  getList,
  getDetail,
  addBlog,
  deleteBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  if (method === "GET" && path === "/api/blog/detail") {
    const id = req.query.id;
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  if (method === "POST" && path === "/api/blog") {
    let blogData = req.body;
    return new SuccessModel(addBlog(blogData));
  }

  if (method === "DELETE" && path === "/api/blog") {
    const id = req.query.id;
    console.log("id is ", id);
    const result = deleteBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("删除失败");
    }
  }
};

module.exports = handleBlogRouter;
