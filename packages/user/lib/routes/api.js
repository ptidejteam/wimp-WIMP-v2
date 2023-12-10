// const bcrypt = require('bcrypt');
// const auth = require("./auth");
const messages = require('./proto/user_pb');
const crypto = require("crypto");
const IdentityModel = require("./models/identity.model");


module.exports = class API {
    constructor(grpc) {
        this.grpc = grpc;
    }

    create = (call, callback) => {

        let salt = crypto.randomBytes(16).toString("base64");
        let hash = crypto
          .scryptSync(call.request.getUser().getPassword(), salt, 64, { N: 16384 })
          .toString("base64");
          call.request.getUser().setPassword(salt + "$" + hash);

        IdentityModel.createIdentity(call.request.getUser()).then(r => {
            let resp = new messages.CreateResponse();
            resp.setId(r._id.toString());
            callback(null, resp);
        });

    }

    get = (call,callback) => { 
        let resp = new messages.GetReponse()
        IdentityModel.findById(call.request.getIds()).then( user => {
            if (user) {
                resp.setId(user._id.toString());
                resp.setName(user.name);
                resp.setEmail(user.email);
                callback(null, resp);
            } else {
                return callback({
                    code: this.grpc.status.UNAUTHENTICATED,
                    message: "No user found",
                });
            }
          });

    }

    // login = (call, callback) => {
    //     const users = this.db.collection("users");

    //     users.findOne({ email: call.request.getEmail() }).then(user => {
    //         if (user) {
    //             bcrypt.compare(call.request.getPassword(), user.password, (err, result) => {
    //                 if (result) {
    //                     let resp = new messages.UserResponse();
    //                     resp.setId(user._id.toString());
    //                     resp.setName(user.name);
    //                     resp.setEmail(user.email);
    //                     resp.setToken(auth.generateToken(user));
    //                     callback(null, resp);
    //                 }
    //             });
    //         } else {
    //             return callback({
    //                 code: this.grpc.status.UNAUTHENTICATED,
    //                 message: "No user found",
    //             });
    //         }
    //     });
    // }

    // verify = (call, callback) => {
    //     auth.verify(call.request.getToken(), (usr) => {
    //         const users = this.db.collection("users");

    //         let resp = new messages.VerifyResponse();
    //         if (usr) {
    //             users.findOne({ email: usr.email }).then(user => {
    //                 resp.setId(user._id.toString());
    //                 resp.setName(user.name);
    //                 resp.setEmail(user.email);
    //                 callback(null, resp);
    //             })
    //         } else {
    //             return callback({
    //                 code: this.grpc.status.UNAUTHENTICATED,
    //                 message: "No user found",
    //             });
    //         }
    //     })
    // }

    // getUser = (call, callback) => {
    //     const users = this.db.collection("users");
    //     let resp = new messages.VerifyResponse();
    //     let userId = ObjectId(call.request.getUserId());
    //     users.findOne({ _id: userId}).then(user => {
    //         if (user) {
    //             resp.setId(user._id.toString());
    //             resp.setName(user.name);
    //             resp.setEmail(user.email);
    //             callback(null, resp);
    //         } else {
    //             return callback({
    //                 code: this.grpc.status.UNAUTHENTICATED,
    //                 message: "No user found",
    //             });
    //         }
    //     })
    // }
};
