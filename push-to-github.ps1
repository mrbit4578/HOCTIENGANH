Set-Location -Path "E:\AI\HocTienganh\owly-english-v2\owly-english"
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Owly English - Dang push code len GitHub..." -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

git init
git remote add origin https://github.com/mrsirom629-max/BE-HOCTIENGANH.git 2>$null
git remote set-url origin https://github.com/mrsirom629-max/BE-HOCTIENGANH.git

git add .
git commit -m "feat: Full Owly English app with RAG AI and online LLM key"
git branch -M main
git push -u origin main --force

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "  DA PUSH THANH CONG LEN GITHUB!" -ForegroundColor Green
Write-Host "  Repo: https://github.com/mrsirom629-max/BE-HOCTIENGANH" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
