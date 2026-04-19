# 🚀 Optivis Web App

[![CI](https://github.com/satyazitmohapatra/optiviswebapp/actions/workflows/ci.yml/badge.svg)](https://github.com/satyazitmohapatra/optiviswebapp/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16+-black)](https://nextjs.org/)

A premium, conversion-focused enterprise website for **Optivis Consultancy Services**. Built with a focus on performance, accessibility, and modern aesthetics using the latest **Next.js App Router** and **Tailwind CSS**.

---

## ✨ Features

- 🏎️ **Optimized Performance**: Standalone build support and image optimization.
- 🎨 **Modern Design**: Built with Tailwind CSS, features glassmorphism and subtle micro-animations.
- 📱 **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop.
- 🐍 **Extension Support**: Python virtual environment included for data processing or backend tasks.
- 🐳 **Docker Ready**: Production-grade Dockerfile included.
- 🤖 **CI/CD Integrated**: Automated linting and builds via GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: Custom reusable primitives under `src/components/ui`.
- **Backend/Tools**: Python 3.11 with `pip` requirements.

---

## 🚀 Getting Started

### Node.js (Frontend)

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run in development mode:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

### Python (Backend/Tools)

A virtual environment is pre-configured. To activate and manage:

- **Windows:** `.\venv\Scripts\Activate.ps1`
- **Linux/macOS:** `source venv/bin/activate`

To reinstall dependencies:
```bash
.\setup-python.ps1
```

---

## 🐳 Docker Support

Build and run the production container:

```bash
# Build
docker build -t optivis-app .

# Run
docker run -p 3000:3000 optivis-app
```

---

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (pages & layout)
│   ├── components/     # UI Primitives & Sections
│   ├── content/        # Centralized site content (JSON)
│   └── lib/            # Shared utilities & configurations
├── public/             # Static assets (images, icons)
├── .github/workflows/ # GitHub Actions CI
├── venv/               # Python Virtual Environment
├── Dockerfile          # Production Docker configuration
└── requirements.txt    # Python dependencies
```

---

## 🎨 Design System

Customization is centralized for ease of maintenance:

- **Colors**: Update CSS variables in `src/app/globals.css`.
- **Themes**: Configure `tailwind.config.ts` for semantic mappings.
- **Copy/Content**: All business text lives in `src/content/site-content.json`.

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by **Optivis**.
