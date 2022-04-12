const router = require("express").Router();
let Comment = require("../models/Comment.model");

// ---------------------------------------------- GET COMMENT
router.get("/comment/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).send("Comment not found");
    return res.json(comment);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

// ---------------------------------------------- CREATE COMMENT
router.post("/comment/create", async (req, res) => {
  try {
    const { comment, plantId, owner } = req.body;

    const createdComment = await Comment.create({
      comment,
      plantId,
      owner,
    });
    return res.json(createdComment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// ---------------------------------------------- UPDATE COMMENT
router.put("/comment/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const currentComment = await Comment.findOneAndUpdate(
      id,
      { comment },
      { new: true }
    );
    return res.json(currentComment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// ---------------------------------------------- DELETE COMMENT
router.delete("/comment/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    return res.json(deletedComment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
