const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
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
    res.end("PUT not support on /promotions");
  })
  .delete((req, res, next) => {
    res.end("DELETE all promotions");
  });

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    res.end("Will details of the promotions: " + req.params.promoId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST not support on promotions: " + req.params.promoId);
  })
  .put((req, res, next) => {
    res.write("Updating the promotions: " + req.params.promoId + "\n");
    res.end(
      "Will update promotions: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("DELETE: " + req.params.promoId);
  });
module.exports = promoRouter;
