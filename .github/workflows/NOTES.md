Windows Powershell:
```powershell
git diff --name-only (git rev-parse HEAD~1) (git rev-parse HEAD) | Select-String -Pattern '^packs/' | ForEach-Object { ($_.Line -split '/')[1] } | Sort-Object | Get-Unique | ConvertTo-Json
```
Linux Bash:
```bash
git diff --name-only $(git rev-parse HEAD~1) $(git rev-parse HEAD) | grep '^packs/' | cut -d'/' -f2 | sort | uniq | jq -R -s 'split("\n")[:-1]'
```
