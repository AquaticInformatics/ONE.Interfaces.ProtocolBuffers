# Generating source code from .proto files

The generators folder contains scripts for generating class files in the target languages.

## DotNet

protogen-batch.ps1 is a powershell script that will enumerate through the entire \proto folder and generate C# class files in the \generated\dotnet folder

Console logging will indicate success or failure for each file.

### Tools Needed
Download and install protoget from https://protogen.marcgravell.com/
https://protogen.marcgravell.com/protogen/protogen%202.3.16.zip

### Steps
In powershell, execute script passing in full path to proto directory

````
cd \generators\dotnet
 .\protogen-batch.ps1 "..\claros.interfaces.protocolbuffers\proto\"
````

After the command executes, you will be in the generated folder.
````
cd ..\generators\dotnet
````