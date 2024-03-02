const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the dishes to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish:" + req.body.name + " details: " + req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 405;
    res.end("PUT not support on /dishes");
  })
  .delete((req, res, next) => {
    res.end("DELETE all dishes");
  });

dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end("Will details of the dish: " + req.params.dishId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not support on: " + req.params.dishId);
  })
  .put((req, res, next) => {
    res.write("Updating the dish: " + req.params.dishId + "\n");
    res.end(
      "Will update dish: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("DELETE: " + req.params.dishId);
  });

module.exports = dishRouter;
