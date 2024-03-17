#!/usr/bin/env bash

echo " 📦  Checking for updates..."

require() {
  if [[ -z $(command -v $1 2>/dev/null) ]]; then
    echo " 🛑  Please install $1 and try again"
    exit 1
  fi
}

require node
require npm
require expo

echo " 📦  Installing Expo CLI..."
npm install -g expo-cli
echo " 📦  Installing Expo dependencies..."
npx expo install
