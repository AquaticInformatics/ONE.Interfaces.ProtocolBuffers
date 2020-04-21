# Generating source code from .proto files

The generators folder contains scripts for generating class files in the target languages.

## DotNet

gen_all.ps1 is a powershell script that will enumerate through the entire \proto folder and generate C# class files

Console logging will indicate success or failure for each file.