@echo off
echo Installing dependencies...
"C:\Program Files\nodejs\npm.cmd" install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo Dependencies installed successfully!
echo.
echo Starting the application...
echo.
echo Backend server will start on port 3001
echo Frontend will be available on port 3000
echo.
start "Backend Server" cmd /k "C:\Program Files\nodejs\npm.cmd" run server
timeout /t 3 /nobreak >nul
start "Frontend Server" cmd /k "C:\Program Files\nodejs\npm.cmd" run dev
echo.
echo Both servers are starting...
echo Open your browser and go to: http://localhost:3000
pause

