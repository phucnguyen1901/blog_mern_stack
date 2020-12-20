const Blog = require("../model/blog.model");

function blog() {
  return {
    async getBlog(req, res) {
      try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.json(blogs);
      } catch (e) {
        console.log("Get failed");
        res.json({ check: false });
        console.log(e);
      }
    },

    async getIdBlog(req, res) {
      try {
        const blog = await Blog.find({ _id: req.params.id });
        res.json(blog);
      } catch (e) {
        console.log("Get id failed");
        res.json({ check: false });
        console.log(e);
      }
    },

    async createBlog(req, res) {
      const { title, content, author, image } = req.body;
      console.log(image);
      const blog = new Blog({
        title: title,
        content: content,
        author: author,
        image: image,
      });

      try {
        await blog.save();
        console.log("Save is successfully");
        res.json({ check: true });
      } catch (e) {
        console.log("Save is failed");
        res.json({ check: false });
        console.log(e);
      }
    },

    async deleteIdBlog(req, res) {
      const { id } = req.body;
      await Blog.findByIdAndRemove(id, (err, data) => {
        if (err) {
          console.log("Error" + err);
          res.json({ check: false });
        } else {
          console.log("Delete is successfully ");
          res.json({ check: true });
        }
      });
    },
  };
}

module.exports = blog;
