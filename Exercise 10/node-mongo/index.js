const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion2";
const dbpoper = require("./operations");

MongoClient.connect(url)
  .then((client) => {
    console.log("Connected correctly to server");
    const db = client.db(dbname);

    dbpoper
      .insertDocument(
        db,
        { name: "BBQ2", description: "Grilled beef" },
        "dishes"
      )
      .then((result) => {
        console.log("Insert Document:\n", result.ops);
        return dbpoper.findDocuments(db, "dishes");
      })
      .then((docs) => {
        console.log("Found Document:\n", docs);
        return dbpoper.updateDocument(
          db,
          { name: "BBQ2" },
          { description: "Updated Test" },
          "dishes"
        );
      })
      .then((result) => {
        console.log("Update Document:\n", result.result);
        return dbpoper.findDocuments(db, "dishes");
      })
      .then((docs) => {
        console.log("Found Update Documents:\n", docs);
        return client.close();
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
