const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "",
      content: "",
      createTime: "",
      author: "zp",
    },
    {
      id: 2,
      title: "",
      content: "",
      createTime: "",
      author: "zp",
    },
  ];
};
const getDetail = (id) => {
  return {
    id: 1,
    title: "",
    content: "",
    createTime: "",
    author: "zp",
  };
};

const addBlog = (blogData = {}) => {
  return {
    id: 3,
  };
};

const deleteBlog = (id) => {
  return true;
};
module.exports = {
  getList,
  getDetail,
  addBlog,
  deleteBlog,
};
