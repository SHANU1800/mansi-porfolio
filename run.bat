@echo off
title Mansi Portfolio - Dev Server
cd /d "%~dp0"

echo ========================================================
echo   Starting Mansi Portfolio Website Development Server
echo ========================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not found in PATH.
    echo Please install Node.js from https://nodejs.org/ to run this project.
    echo.
    pause
    exit /b 1
)

:: Check if dependencies are installed
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing project dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
)

:: Open browser automatically after 2 seconds in background
echo [INFO] Opening browser at http://localhost:5173/ ...
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:5173/"

:: Start Vite dev server
echo [INFO] Starting Vite development server...
echo Press Ctrl+C in this terminal window to stop the server anytime.
echo.
call npm run dev -- --host

pause

