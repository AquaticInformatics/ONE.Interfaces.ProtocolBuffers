$currentPath = pwd
$files = Get-ChildItem -Path . -Filter *.proto -Recurse | ForEach-Object {$_.FullName} 
$files = $files.Replace($currentPath.Path, ".")

$protoDirs =  Get-ChildItem -Directory -Recurse | ? {$_.FullName -inotmatch 'out'} | ForEach-Object {$_.FullName}
$protoDirs = $protoDirs.Replace($currentPath.Path, ".") | % {"--proto_path=$_"}
$protoDirsCommand = [String]::Join(" ", $protoDirs)

$logName =  (Get-Date -DisplayHint Time).ToString().Replace(":","_").Replace("/","_").Replace(" ", "-")

Start-Transcript $logName

foreach($file in $files)
{
$Command = "protogen --csharp_out=./out/ $file"
echo `n$Command

Invoke-Expression -Command $Command

}

Stop-Transcript