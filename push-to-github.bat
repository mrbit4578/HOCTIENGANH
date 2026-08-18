@echo off
echo ========================================================
echo   Owly English - Dang push code len GitHub...
echo ========================================================
cd /d E:\AI\HocTienganh\owly-english-v2\owly-english

git init
git remote add origin https://github.com/mrbit4578/HOCTIENGANH.git 2>nul
git remote set-url origin https://github.com/mrbit4578/HOCTIENGANH.git

git add .
git commit -m "fix: resolve SSR createCsrfMiddleware error for Vercel deployment"
git branch -M main
git push -u origin main

echo.
echo ========================================================
echo   DA PUSH THANH CONG LEN GITHUB!
echo   Repo: https://github.com/mrbit4578/HOCTIENGANH
echo ========================================================
pause
