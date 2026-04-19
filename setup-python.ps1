# Setup Python Virtual Environment (Windows)

Write-Host "Creating virtual environment..." -ForegroundColor Cyan
python -m venv venv

Write-Host "Activating virtual environment..." -ForegroundColor Cyan
.\venv\Scripts\Activate.ps1

Write-Host "Installing dependencies from requirements.txt..." -ForegroundColor Cyan
pip install -r requirements.txt

Write-Host "Done! Virtual environment is ready." -ForegroundColor Green
Write-Host "To activate in the future, run: .\venv\Scripts\Activate.ps1" -ForegroundColor Yellow
