Windows Powershell:
```powershell
git diff --name-only HEAD~1 HEAD | Select-String -Pattern '^packs/' | ForEach-Object { ($_.Line -split '/')[1] } | Sort-Object | Get-Unique | ConvertTo-Json -Compress
```
Linux Bash:
```bash
git diff --name-only HEAD~1 HEAD | grep '^packs/' | cut -d'/' -f2 | sort | uniq | jq -R -s -c 'split("\n")[:-1]'
```
