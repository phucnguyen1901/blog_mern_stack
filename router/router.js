const router = require("express").Router();
const blog = require("../controller/blog");
router.get("/api/get", blog().getBlog);
router.get("/api/:id", blog().getIdBlog);
router.delete("/api/delete/:id", blog().deleteIdBlog);
router.post("/api/create", blog().createBlog);
module.exports = router;
