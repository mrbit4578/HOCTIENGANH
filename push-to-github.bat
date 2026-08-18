@echo off
echo ========================================================
echo   Owly English - Dang push code len GitHub...
echo ========================================================
cd /d E:\AI\HocTienganh\owly-english-v2\owly-english

git init
git remote add origin https://github.com/mrsirom629-max/BE-HOCTIENGANH.git 2>nul
git remote set-url origin https://github.com/mrsirom629-max/BE-HOCTIENGANH.git

git add .
git commit -m "feat: Full Owly English app with RAG AI and online LLM key"
git branch -M main
git push -u origin main --force

echo.
echo ========================================================
echo   DA PUSH THANH CONG LEN GITHUB!
echo   Repo: https://github.com/mrsirom629-max/BE-HOCTIENGANH
echo ========================================================
pause
