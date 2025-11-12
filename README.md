# Tracker Angular UI

This is the Angular frontend application for the Tracker project.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn

## Installation

1. Navigate to the `angular-ui` directory:
   ```bash
   cd angular-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
angular-ui/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts
│   │   └── home/
│   │       ├── home.component.ts
│   │       ├── home.component.html
│   │       └── home.component.css
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

## API Configuration

The Angular app is configured to connect to the .NET Web API running at `https://localhost:7000`. You can modify the API endpoint in the service files if needed.

