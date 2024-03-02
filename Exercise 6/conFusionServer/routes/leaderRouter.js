const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the Leader to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion:" +
        req.body.name +
        " details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 405;
    res.end("PUT not support on /Leader");
  })
  .delete((req, res, next) => {
    res.end("DELETE all Leader");
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end("Will details of the Leader: " + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not support on Leader: " + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write("Updating the Leader: " + req.params.leaderId + "\n");
    res.end(
      "Will update Leader: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("DELETE: " + req.params.leaderId);
  });

module.exports = leaderRouter;
