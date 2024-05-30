#!/bin/bash

# Get the drive and path of the script
scriptPath="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change the current working directory to the script path
cd "$scriptPath"

# Define the array of packages
packs=("user" "api")

# Get the GOPATH from the system environment
GOPATH=$(go env GOPATH)
echo "GOPATH: $GOPATH"

# Add the 'bin' directory of GOPATH to the system PATH
export PATH="$GOPATH/bin:$PATH"

# Generate Go protobuf files for all protos
for d in "${packs[@]}"; do
    echo "Compiling $d"
    protoc -I . -I"$GOPATH/pkg/mod/github.com/googleapis" -I lib \
        --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative \
        "lib/$d"/*.proto
done

echo "Generate api definition with GRPC Gateway"
protoc -I lib \
    --grpc-gateway_out . \
    --grpc-gateway_opt logtostderr=true \
    --grpc-gateway_opt paths=source_relative \
    lib/api/api.proto

echo "Generate swagger docs with GRPC Gateway"
protoc -I . -I . -I"$GOPATH/pkg/mod/github.com/googleapis" -I lib \
    --openapiv2_out . \
    --openapiv2_opt logtostderr=true \
    lib/api/api.proto

# endlocal
