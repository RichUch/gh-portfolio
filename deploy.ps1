# Remove the docs folder
Remove-Item -Path ".\docs" -Recurse -Force

# Run the build command
npm run build

# Move dist folder to docs
Move-Item -Path "dist" -Destination "docs" -Force

# Stage and commit the changes
git add docs -f
git commit -m $args[0]  # Use the first argument passed (commit message)

# Push changes to the remote repository
git push origin main  # Change 'main' if you are using a different branch
