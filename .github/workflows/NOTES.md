Windows Powershell:
```powershell
git diff --name-only 4fd2b251ba65ba40cb29bf03c0fbf1eb2841a789 (git rev-parse --short HEAD) | Select-String -Pattern '^packs/' | ForEach-Object { ($_.Line -split '/')[1] } | Sort-Object | Select-Object -Unique | ConvertTo-Json
```
Linux Bash:
```bash
TBD
```
