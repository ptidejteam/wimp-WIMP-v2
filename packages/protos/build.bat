@echo off
setlocal enabledelayedexpansion

rem Get the drive and path of the script
for %%i in ("%~dp0") do set "scriptPath=%%~di%%~pi"

rem Change the current working directory to the script path
cd /d "%scriptPath%"

rem Define the array of packages
set "packs=user api"

REM Get the GOPATH from the system environment
for /f "tokens=*" %%i in ('go env GOPATH') do set "GOPATH=%%i"

echo GOPATH: %GOPATH%

rem Add the 'bin' directory of GOPATH to the system PATH
set "PATH=%GOPATH%\bin;%PATH%"

rem Generate Go protobuf files for all protos
for %%d in (%packs%) do (
    echo Compiling %%d
    protoc -I . -I%GOPATH%\pkg/mod/github.com/googleapis^
        -I lib ^
        --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ^
        lib/%%d/*.proto
)


echo Generate Js file for user protos 
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:lib/user --grpc_out=grpc_js:lib/user --proto_path=./lib/user ./lib/user/*.proto


echo Generate api definition with GRPC Gateway
protoc  -I lib ^
    --grpc-gateway_out . ^
    --grpc-gateway_opt logtostderr=true ^
    --grpc-gateway_opt paths=source_relative ^
    lib/api/api.proto



echo Genrate swagger docs with GRPC Gateway 
protoc -I . -I . -I%GOPATH%\pkg/mod/github.com/googleapis^
    -I lib ^
    --openapiv2_out . ^
    --openapiv2_opt logtostderr=true ^
    lib/api/api.proto

@REM endlocal
