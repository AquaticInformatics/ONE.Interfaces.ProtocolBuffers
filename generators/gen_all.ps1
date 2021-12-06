mkdir -Force ../proto/flat

Get-ChildItem ../proto/one -Recurse -Filter "*.proto" | Copy-Item -destination ../proto/flat

cd ../proto/flat

$files = Get-ChildItem . -Filter "*.proto" 

$dirs = "cpp","csharp","python" # "java", "js", "objc", "php", "ruby"

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
    echo `n$Command

    Invoke-Expression -Command $Command
}
# Stop-Transcript
cd ..\..\generators
