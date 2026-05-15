@echo off
REM Portfolio Website Quick Start Script for Windows

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  Frontend Developer Portfolio - Quick Setup               ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

echo.
echo Creating project structure...

REM Create directories
mkdir src\components 2>nul
mkdir src\pages 2>nul
mkdir src\context 2>nul
mkdir src\styles 2>nul

echo ✅ Folders created

echo.
echo Installing dependencies...
echo This may take a few minutes...
echo.

REM Rename package.json
if exist portfolio-package.json (
    ren portfolio-package.json package.json
    echo ✅ package.json renamed
)

REM Install dependencies
call npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    echo Please ensure npm is working correctly
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  Next Steps:                                               ║
echo ║                                                            ║
echo ║  1. Read SETUP_GUIDE.md for file organization            ║
echo ║  2. Update your personal information in the pages        ║
echo ║  3. Run: npm run dev                                      ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Would you like to start the development server now? (Y/N)
set /p start=
if /i "%start%"=="Y" (
    call npm run dev
) else (
    echo To start the dev server later, run: npm run dev
)

pause
