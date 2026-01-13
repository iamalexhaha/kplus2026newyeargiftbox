# New Year Gift Box Promo

This project is a React application built with Vite, designed for the "2026 New Year Gift Box" promotion.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Run `node -v` to check.
- **npm**: Usually comes with Node.js. Run `npm -v` to check.

### Installation

1.  Clone the repository (if you haven't already).
2.  Install dependencies:

    ```bash
    npm install
    ```

### Local Development

Start the development server:

```bash

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.

## Deployment

This project is configured to deploy to GitHub Pages automatically using GitHub Actions.

1. Push changes to the `main` branch.
2. The "Deploy to GitHub Pages" action will trigger.
3. Once complete, your site will be live at `https://iamalexhaha.github.io/kplus2026newyeargiftbox`.

### Manual Deployment (Optional)

You can also build locally and deploy the `dist` folder manually if needed.
```

Open your browser at the URL shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Building for Production

To build the application for production:

```bash
npm run build
```

The output will be in the `dist` directory.

## Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

### Setup

1.  Go to your GitHub repository **Settings**.
2.  Navigate to **Secrets and variables** > **Actions**.
3.  Add a New Repository Secret:
    -   **Name**: `GEMINI_API_KEY`
    -   **Value**: Your Gemini API key.
4.  Navigate to **Pages** (under Code and automation).
5.  Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Triggering Deployment

The deployment workflow is triggered automatically:
-   On every push to the `main` branch.
-   You can also manually trigger it from the **Actions** tab in GitHub.

## Project Structure

-   `src`: Source code.
-   `public`: Static assets.
-   `.github/workflows`: GitHub Actions workflows.
-   `vite.config.ts`: Vite configuration (includes base path for GitHub Pages).
