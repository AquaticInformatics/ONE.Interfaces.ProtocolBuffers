mkdir -Force ../proto/flat

Get-ChildItem ../proto/claros -Recurse -Filter "*.proto" | Copy-Item -destination ../proto/flat

Set-Location ../proto/flat

$files = Get-ChildItem . -Filter "*.proto" 

$dirs = "python" # "java", "js", "objc", "php", "ruby"

# Create Output Directories
foreach($dir in $dirs) {
    mkdir -Force ./out/$dir
}

$flags = @()
foreach ($dir in $dirs){
    $flags += "--$dir" +"_out=./out/$dir"
}
$flags = [String]::Join(" ", $flags)
$flags

$logName =  (Get-Date -DisplayHint Time).ToString().Replace(":","_").Replace("/","_").Replace(" ", "-")+".log"

$commandPath = Split-Path $MyInvocation.MyCommand.Path -Parent

# Start-Transcript $logName
foreach($file in $files)
{
    $Command = "$commandPath\protoc\tool\protoc $flags $file"
    Write-Output `n$Command

    Invoke-Expression -Command $Command
}

mkdir -Force ./claros.interfaces.python
Set-Location ./claros.interfaces.python

Copy-Item ..\..\..\generators\python\* .
mkdir -Force .\claros_interfaces
Copy-Item ..\out\python\*.* claros_interfaces
Move-Item -Force __init__.py claros_interfaces
Copy-Item -Force claros_interfaces.pth claros_interfaces

# Make a source package
$Command = "python setup.py clean build sdist"
Write-Output `n$Command
Invoke-Expression -Command $Command

# Make a binary package
$Command = "python setup.py clean build bdist_wheel"
Write-Output `n$Command
Invoke-Expression -Command $Command

# In the claros.interfaces.python/dist directory will be the source tarball and the binary wheel file

# Stop-Transcript
Set-Location ..\..\..\generators
