const mongoose = require("mongoose");

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion2";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Uthappizza",
    description: "Original",
  })
    .then((dish) => {
      console.log(dish);

      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: { description: "Updated test" },
        },
        {
          new: true,
        }
      ).exec();
    })
    .then((dish) => {
      console.log(dish);

      dish.comments.push({
        rating: 5,
        comment: "Mon nay cho 5 sao",
        author: "Ken khong ngu",
      });

      return dish.save();
    })
    // .then((dish) => {
    //   console.log(dish);

    //   return Dishes.deleteOne({});
    // })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
