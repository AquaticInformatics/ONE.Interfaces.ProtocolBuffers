cd $Args[0]
$currentPath = pwd

$files = Get-ChildItem -Path . -Filter *.proto -Recurse | ForEach-Object {"$_"} 
$files = $files.Replace($currentPath.Path, ".")

$protoDirs =  Get-ChildItem -Directory -Recurse | Where-Object {$_.FullName -inotmatch 'out'} | ForEach-Object {$_.FullName}
$protoDirs = $protoDirs.Replace($currentPath.Path, ".") | ForEach-Object {"--proto_path=$_"}

$protoDirsCommand = [String]::Join(" ", $protoDirs)


$dirs = "cpp", "java", "js", "objc", "php", "python", "ruby"

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

$logName =  (Get-Date -DisplayHint Time).ToString().Replace(":","_").Replace("/","_").Replace(" ", "-")

Start-Transcript $logName
foreach($file in $files)
{
#    $Command = "protogen --csharp_out=./out/ $protoDirsCommand $file"
    $Command = "protoc $flags $protoDirsCommand $file"
    echo `n$Command

    Invoke-Expression -Command $Command
}
Stop-Transcript