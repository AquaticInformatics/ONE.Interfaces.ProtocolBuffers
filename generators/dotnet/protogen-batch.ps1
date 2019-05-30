cd $Args[0]
$currentPath = pwd
#$files = Get-ChildItem -Path . -Filter *.proto -Recurse | ForEach-Object {$_.FullName} 
$files = Get-ChildItem -Path . -Filter *.proto -Recurse | ForEach-Object {"$_"} 
$files = $files.Replace($currentPath.Path, ".")

$protoDirs =  Get-ChildItem -Directory -Recurse | Where-Object {$_.FullName -inotmatch 'out'} | ForEach-Object {$_.FullName}
$protoDirs = $protoDirs.Replace($currentPath.Path, ".") | ForEach-Object {"--proto_path=$_"}


$protoDirsCommand = [String]::Join(" ", $protoDirs)

$logName =  (Get-Date -DisplayHint Time).ToString().Replace(":","_").Replace("/","_").Replace(" ", "-")

#Start-Transcript $logName
foreach($file in $files)
{
    $Command = "protogen --csharp_out=../generated/dotnet $protoDirsCommand $file"
    echo `n$Command

    Invoke-Expression -Command $Command
}
#Stop-Transcript
cd $currentPath