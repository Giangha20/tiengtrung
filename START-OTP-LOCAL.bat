@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo   Tieng Trung - OTP Backend
 echo ========================================
if not exist node_modules (
  echo Dang cai thu vien lan dau...
  call npm install
  if errorlevel 1 (
    echo.
    echo CAI THU VIEN THAT BAI. Hay kiem tra Node.js va npm.
    pause
    exit /b 1
  )
)
echo.
echo Backend OTP dang chay tai http://127.0.0.1:3000
 echo Kiem tra: http://127.0.0.1:3000/api/health
 echo.
npm start
pause
