# Office Bingo Dev Container

This project includes a VS Code dev container configuration for consistent development environments.

## Quick Start

1. Install [Docker](https://www.docker.com/products/docker-desktop) and [VS Code](https://code.visualstudio.com/)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. Click "Reopen in Container" when prompted (or use Command Palette: "Dev Containers: Reopen in Container")

## What's Included

- **Node.js 22** (LTS)
- **Angular CLI 21** (globally installed)
- **Git**
- **VS Code Extensions**:
  - Angular Language Service
  - ESLint
  - Prettier

## Features

- Auto-installs dependencies on container creation
- Port 4200 automatically forwarded for dev server
- Prettier formatting on save
- All project dependencies pre-configured

## Usage

Once the container is running:

```bash
npm start          # Start dev server
npm run build      # Build for production
npm test           # Run tests
npm run lint       # Run linter
```

The dev server will be available at `http://localhost:4200`
