@echo off
echo Starting Student ERP System...
echo.
echo Backend server starting on port 3001...
start "Backend Server" cmd /k "C:\Program Files\nodejs\npm.cmd" run server
timeout /t 3 /nobreak >nul
echo Frontend server starting on port 3000...
start "Frontend Server" cmd /k "C:\Program Files\nodejs\npm.cmd" run dev
echo.
echo Both servers are starting...
echo.
echo Open your browser and go to: http://localhost:3000
echo Backend API available at: http://localhost:3001
echo.
pause
