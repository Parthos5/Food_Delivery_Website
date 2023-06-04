const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://Parth:Aditi1522@cluster0.cd6b2vo.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const MongoDB = async () => {
  await mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB successfully!");
      const fetched_data = mongoose.connection.db.collection("food_items"); //this command stores the data of a particular collection
      fetched_data
        .find({})
        .toArray()
        .then(function (err, data) {
          err ? console.log(err) : console.log();
        });
    })
    .catch((err) => console.log("Error:" + err));
};

module.exports = MongoDB;
