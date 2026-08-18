@echo off
echo ========================================================
echo   Owly English - Push code len 2 repo GitHub...
echo ========================================================
cd /d E:\AI\HocTienganh\owly-english-v2\owly-english

git add .
git commit -m "fix: convert to pure Vite SPA - remove SSR/Nitro to fix Vercel deployment"

echo.
echo --- Push len mrbit4578/HOCTIENGANH ---
git remote set-url origin https://github.com/mrbit4578/HOCTIENGANH.git
git branch -M main
git push -u origin main --force

echo.
echo --- Push len mrsirom629-max/LAM-ANH-HOCTIENGANH ---
git remote add lamhoc https://github.com/mrsirom629-max/LAM-ANH-HOCTIENGANH.git 2>nul
git remote set-url lamhoc https://github.com/mrsirom629-max/LAM-ANH-HOCTIENGANH.git
git push lamhoc main --force

echo.
echo ========================================================
echo   DA PUSH THANH CONG LEN CA 2 REPO GITHUB!
echo   1. https://github.com/mrbit4578/HOCTIENGANH
echo   2. https://github.com/mrsirom629-max/LAM-ANH-HOCTIENGANH
echo ========================================================
pause
