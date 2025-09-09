@echo off
echo ========================================
echo Student ERP - Setup Script
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo After installation, restart your terminal and run this script again.
    pause
    exit /b 1
)

echo Node.js is installed!
echo.

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Start the backend server:
echo    npm run server
echo.
echo 2. In a new terminal, start the frontend:
echo    npm run dev
echo.
echo 3. Open your browser and go to:
echo    http://localhost:3000
echo.
echo The backend API will be available at:
echo    http://localhost:3001
echo.
pause
