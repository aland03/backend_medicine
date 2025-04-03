const validation = require("../validation/feedback.validate");
const models = require("../models/feedback.models");

class FeedbackController {
  getAllFeedback = () => {
    return (req, res) => {
      models
        .getAllFeedback()
        .then((data) => {
          data = res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  getByIdFeedback = () => {
    return (req, res) => {
      const feedbackId = req.params.feedback_id;
      models
        .getByIdFeedback(feedbackId)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  addNewFeedback = () => {
    return (req, res) => {
      const body = req.body;
      if (validation.addNew(body).error) {
        res.send(validation.addFeedback(body).error.details[0].message);
      } else {
        models
          .addNewFeedback(body)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log(err);
            res.status(403).send({
              message: "something with wrong",
            });
          });
      }
    };
  };

  deleteFeedback = () => {
    return (req, res) => {
      const feedbackId = req.params.feedback_id;
      models
        .deteleFeedback(feedbackId)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(403).send({
            message: "some thing with wrong",
          });
        });
    };
  };

  updateFeedback = () => {
    return (req, res) => {
      const feedbackId = req.params.feedback_id;
      const body = req.body;
      if (validation.updateFeedback(body).error) {
        res.send(validation.updateFeedback(body).error.details[0].message);
      } else {
        models
          .updateFeedback(feedbackId, body)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log(err);
            res.status(403).send({
              message: "something with wrong",
            });
          });
      }
    };
  };
}

module.exports = new FeedbackController();
