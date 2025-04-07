#!/bin/bash

# Instructions for setting up GitHub repository
echo "===== GitHub Repository Setup ====="
echo "1. Go to https://github.com/new"
echo "2. Enter 'my-portfolio' as the repository name"
echo "3. Keep it public if you want to use GitHub Pages for free"
echo "4. Click 'Create repository'"
echo "5. Copy the repository URL (e.g., https://github.com/yourusername/my-portfolio.git)"
echo ""
read -p "Enter the GitHub repository URL: " REPO_URL

# Set up the remote repository
git remote add origin $REPO_URL
echo "Remote 'origin' added."

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

echo ""
echo "===== Deployment Options ====="
echo "1. Vercel (Recommended for Next.js projects):"
echo "   a. Go to https://vercel.com/"
echo "   b. Sign up or log in (you can use your GitHub account)"
echo "   c. Click 'New Project'"
echo "   d. Import your 'my-portfolio' repository"
echo "   e. Keep the default settings and click 'Deploy'"
echo ""
echo "2. GitHub Pages (Alternative):"
echo "   This requires additional configuration for Next.js."
echo ""
echo "3. Netlify (Alternative):"
echo "   a. Go to https://www.netlify.com/"
echo "   b. Sign up or log in"
echo "   c. Click 'Add new site' > 'Import an existing project'"
echo "   d. Connect to GitHub and select your repository"
echo "   e. Configure build settings (Build command: 'npm run build', Publish directory: 'out')"
echo ""
echo "Your portfolio is now on GitHub! Follow the steps above to deploy it." 