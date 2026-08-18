Set-Location -Path "E:\AI\HocTienganh\owly-english-v2\owly-english"
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Owly English - Dang push code len GitHub..." -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

git init
git remote add origin https://github.com/mrbit4578/HOCTIENGANH.git 2>$null
git remote set-url origin https://github.com/mrbit4578/HOCTIENGANH.git

git add .
git commit -m "fix: switch to SPA static build for zero-error Vercel deployment"
git branch -M main
git push -u origin main

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "  DA PUSH THANH CONG LEN GITHUB!" -ForegroundColor Green
Write-Host "  Repo: https://github.com/mrbit4578/HOCTIENGANH" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
