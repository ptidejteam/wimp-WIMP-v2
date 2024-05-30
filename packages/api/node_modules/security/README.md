# Project Readme

This project contains Go code and Protocol Buffers definitions. Below are some commands to help you generate Protocol Buffers code and build the Go applications.

## Generate Protocol Buffers Code

To generate Go code from your Protocol Buffers definition, use the following command:

```bash
npm run generate
```

This command uses `npx` to run the Protocol Buffers compiler (`protoc`). It compiles the `user.proto` file located in the `lib/user` directory. The generated Go code is placed in the `./lib/user` directory. The `--go_out` and `--go-grpc_out` flags are used to specify the output paths and options.

## Build Go Applications

To build the Go applications, use the following command:

```bash
npm run build-go
```

This command builds the executables for the `user` and `api` packages located in the `./lib/user` and `./lib/api` directories, respectively. The `go build` command compiles the Go code in each directory.

Make sure to replace the directory paths in the commands with the actual paths to your Go code.

Note: Ensure you have the necessary dependencies installed and the correct project structure for these commands to work.
