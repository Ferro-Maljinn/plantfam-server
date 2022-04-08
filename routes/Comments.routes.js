const router = require("express").Router();
const CommentModel = require("../models/Comment.model");

router.post('/comments', async (req, res) => {
    try {
        const { 
            comment,
            owner,
            plantId,
        } = req.body;

        const newComment = {
            comment: comment,
            owner: owner,
            plantId: plantId,
        };

        await CommentModel.create(newComment);

        res.json({
            newComment: {
            comment,
            owner,
            plantId,
            },
            message: "Successfully submitted a comment!"
        })
    } catch (err) {
        console.log(err, "error from comment Post");
    }
});                         

module.exports = router;