// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_protos_user_CreateRequest(arg) {
  if (!(arg instanceof user_pb.CreateRequest)) {
    throw new Error('Expected argument of type protos.user.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_CreateRequest(buffer_arg) {
  return user_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_CreateResponse(arg) {
  if (!(arg instanceof user_pb.CreateResponse)) {
    throw new Error('Expected argument of type protos.user.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_CreateResponse(buffer_arg) {
  return user_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_DeleteRequest(arg) {
  if (!(arg instanceof user_pb.DeleteRequest)) {
    throw new Error('Expected argument of type protos.user.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_DeleteRequest(buffer_arg) {
  return user_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_DeleteResponse(arg) {
  if (!(arg instanceof user_pb.DeleteResponse)) {
    throw new Error('Expected argument of type protos.user.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_DeleteResponse(buffer_arg) {
  return user_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_GetRequest(arg) {
  if (!(arg instanceof user_pb.GetRequest)) {
    throw new Error('Expected argument of type protos.user.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_GetRequest(buffer_arg) {
  return user_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_GetResponse(arg) {
  if (!(arg instanceof user_pb.GetResponse)) {
    throw new Error('Expected argument of type protos.user.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_GetResponse(buffer_arg) {
  return user_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type protos.user.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_LoginResponse(arg) {
  if (!(arg instanceof user_pb.LoginResponse)) {
    throw new Error('Expected argument of type protos.user.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_LoginResponse(buffer_arg) {
  return user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_RefreshRequest(arg) {
  if (!(arg instanceof user_pb.RefreshRequest)) {
    throw new Error('Expected argument of type protos.user.RefreshRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_RefreshRequest(buffer_arg) {
  return user_pb.RefreshRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_UpdateRequest(arg) {
  if (!(arg instanceof user_pb.UpdateRequest)) {
    throw new Error('Expected argument of type protos.user.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_UpdateRequest(buffer_arg) {
  return user_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_user_UpdateResponse(arg) {
  if (!(arg instanceof user_pb.UpdateResponse)) {
    throw new Error('Expected argument of type protos.user.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_user_UpdateResponse(buffer_arg) {
  return user_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserSvcService = exports.UserSvcService = {
  authenticate: {
    path: '/protos.user.UserSvc/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_protos_user_LoginRequest,
    requestDeserialize: deserialize_protos_user_LoginRequest,
    responseSerialize: serialize_protos_user_LoginResponse,
    responseDeserialize: deserialize_protos_user_LoginResponse,
  },
  refresh: {
    path: '/protos.user.UserSvc/Refresh',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RefreshRequest,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_protos_user_RefreshRequest,
    requestDeserialize: deserialize_protos_user_RefreshRequest,
    responseSerialize: serialize_protos_user_LoginResponse,
    responseDeserialize: deserialize_protos_user_LoginResponse,
  },
  create: {
    path: '/protos.user.UserSvc/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateRequest,
    responseType: user_pb.CreateResponse,
    requestSerialize: serialize_protos_user_CreateRequest,
    requestDeserialize: deserialize_protos_user_CreateRequest,
    responseSerialize: serialize_protos_user_CreateResponse,
    responseDeserialize: deserialize_protos_user_CreateResponse,
  },
  get: {
    path: '/protos.user.UserSvc/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: user_pb.GetResponse,
    requestSerialize: serialize_protos_user_GetRequest,
    requestDeserialize: deserialize_protos_user_GetRequest,
    responseSerialize: serialize_protos_user_GetResponse,
    responseDeserialize: deserialize_protos_user_GetResponse,
  },
  update: {
    path: '/protos.user.UserSvc/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateRequest,
    responseType: user_pb.UpdateResponse,
    requestSerialize: serialize_protos_user_UpdateRequest,
    requestDeserialize: deserialize_protos_user_UpdateRequest,
    responseSerialize: serialize_protos_user_UpdateResponse,
    responseDeserialize: deserialize_protos_user_UpdateResponse,
  },
  delete: {
    path: '/protos.user.UserSvc/Delete',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteRequest,
    responseType: user_pb.DeleteResponse,
    requestSerialize: serialize_protos_user_DeleteRequest,
    requestDeserialize: deserialize_protos_user_DeleteRequest,
    responseSerialize: serialize_protos_user_DeleteResponse,
    responseDeserialize: deserialize_protos_user_DeleteResponse,
  },
};

exports.UserSvcClient = grpc.makeGenericClientConstructor(UserSvcService);
