const mongoose = require("mongoose");
const path = require("path");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { connect } = require("http2");


async function connectDB() { 
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  
    mongoose.connect(uri, mongooseOpts);
  
    mongoose.connection.on('error', (e) => {
      console.log(e);
    });
  
    mongoose.connection.once('open', () => {
      console.log(`MongoDB successfully connected to ${uri}`);
    });
}
connectDB();




const identiySchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    birthday: Date,
    userName: String,
    password: String,
    permissionLevel: Number,
    departement: String,
    isActive: Boolean,
    status: Array,
    noderedInstance: Boolean,
    flowExists: Boolean,
  },
  { timestamps: true }
);

identiySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

identiySchema.set("toJSON", {
  virtuals: true,
});

const Identity = mongoose.model("Users", identiySchema);

exports.findByEmail = (email) => {
  return Identity.find({ email: email });
};

exports.findById = (id) => {
  return Identity.findOne({_id : id}).then((result) => {
    result = result.toJSON();
    delete result._id;
    delete result.__v;
    return result;
  });
};

exports.findByUserName = (name) => {
  return Identity.findOne({ userName: name });
};

exports.createIdentity = (userData) => {
  userData.isActive = true;
  userData.flowExists = false;
  const user = new Identity(userData);
  return user.save();
};

exports.list = (perPage, page) => {
  return new Promise((resolve, reject) => {
    Identity.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec()
      .then((users) => {
        resolve(users);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.putIdentity = (id, data) => {
  return new Promise((resolve, reject) => {
    Identity.findByIdAndUpdate(id, data)
      .then(function (user) {
        return resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.removeById = (id) => {
  return new Promise((resolve, reject) => {
    Identity.deleteOne({ _id: id })
      .then(function (user) {
        return resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// You should call disconnectFromDatabase() when your application is shutting down or after testing.
// disconnectFromDatabase();
