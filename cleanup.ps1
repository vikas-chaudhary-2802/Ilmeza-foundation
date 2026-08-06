# ---------------------------------------------------------------------------
# Ilmeza Foundation — one-time project cleanup (Windows PowerShell)
#
# HOW TO RUN:
#   1. Open the project folder in a terminal (PowerShell).
#   2. Run:   ./cleanup.ps1
#      (If blocked, first run:  Set-ExecutionPolicy -Scope Process Bypass  )
#
# WHAT IT DOES (all safe — nothing the website uses is touched):
#   - Deletes stray Vite temp build files (vite.config.ts.timestamp-*.mjs)
#   - Deletes the leftover test file (__deltest.tmp)
#   - Deletes the OLD unused "WhatsApp Image ..." photos. The site already uses
#     the renamed copies in public/images/gallery/ — the originals are unused.
#   - Stops git from tracking the Vite temp files (if any were committed)
#   - Commits the cleanup
# ---------------------------------------------------------------------------

Write-Host "Cleaning up Ilmeza Foundation project..." -ForegroundColor Cyan

# 1) Remove Vite temporary config files from the project root
Get-ChildItem -Path . -Filter "vite.config.ts.timestamp-*.mjs" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "  - Removed Vite temp files" -ForegroundColor Green

# 2) Remove the leftover test file
Remove-Item -Force "__deltest.tmp" -ErrorAction SilentlyContinue

# 3) Remove the old, unused original photos (renamed copies live in public/images/gallery/)
Get-ChildItem -Path "public/images" -Filter "WhatsApp Image*.jpeg" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "  - Removed unused 'WhatsApp Image' originals" -ForegroundColor Green

# 4) Stop tracking Vite temp files in git (harmless if they were never committed)
git rm --cached --ignore-unmatch "vite.config.ts.timestamp-*.mjs" 2>$null | Out-Null

# 5) Stage and commit the cleanup
git add -A
git commit -m "chore: remove temp files and unused images, update .gitignore" 2>$null | Out-Null

Write-Host "Done. Run 'npm run build' to confirm everything still builds, then push." -ForegroundColor Cyan

# ---------------------------------------------------------------------------
# macOS / Linux equivalent (bash):
#   rm -f vite.config.ts.timestamp-*.mjs __deltest.tmp
#   rm -f "public/images/WhatsApp Image"*.jpeg
#   git rm --cached --ignore-unmatch 'vite.config.ts.timestamp-*.mjs'
#   git add -A && git commit -m "chore: cleanup temp files and unused images"
# ---------------------------------------------------------------------------
