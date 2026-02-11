#!/bin/bash

# Kotlin Foundation Website - Easy Start Script
# This script starts both the main Gatsby site and the Annual Report Vite app

set -e

echo "🚀 Starting Kotlin Foundation Website..."
echo ""

# Check if node_modules exists in root
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies for Gatsby site..."
    yarn install
    echo ""
fi

# Check if node_modules exists in annual-report-2025
if [ ! -d "annual-report-2025/node_modules" ]; then
    echo "📦 Installing dependencies for Annual Report..."
    cd annual-report-2025
    npm install
    cd ..
    echo ""
fi

echo "✅ Dependencies ready!"
echo ""
echo "🌐 Starting both applications..."
echo "   - Gatsby Site: http://localhost:8082"
echo "   - Annual Report: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Function to kill both processes on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $GATSBY_PID $VITE_PID 2>/dev/null
    exit
}

trap cleanup EXIT INT TERM

# Start Gatsby in background
gatsby develop --port 8082 & tcm -w -c src &
GATSBY_PID=$!

# Start Vite in background
cd annual-report-2025
npm run dev &
VITE_PID=$!
cd ..

# Wait for both processes
wait
