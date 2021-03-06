const {
  patchCommentById,
  deleteCommentById,
  selectAllComments
} = require("../models/commentsModel");

exports.getAllComments = (req, res, next) => {
  selectAllComments().then(comments => {
    res.status(200).send({ comments });
  });
};

exports.updateCommentById = (req, resp, next) => {
  const { comment_id } = req.params;
  const { inc_votes } = req.body;
  patchCommentById(comment_id, inc_votes)
    .then(comment => {
      resp.status(200).send({ comment });
    })
    .catch(next);
};

exports.removeCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  deleteCommentById(comment_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      next(err);
    });
};
