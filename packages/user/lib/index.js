const grpc = require('@grpc/grpc-js');
const services = require('./routes/proto/user_grpc_pb');
const API = require("./routes/api");
require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });

async function main() {
    
    let server = new grpc.Server();
    let api = new API(grpc);
    server.addService(services.UserSvcService, {
        create: api.create,
        get: api.get,
    });
    let address = process.env.HOST + ":" + process.env.PORT;
    console.log(address);
    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server running at " + address);
    });
}

main();
