Admin Dashboard

This folder contains a minimal Vite + React scaffold created by the assistant.

Quick start:

1. cd into the folder

   ```powershell
   cd 'C:\Users\LENOVO\Downloads\Coding Jetta AWOKAWOK\webcraftjsm\AdminDashboard'
   ```

2. Install dependencies:

   ```powershell
   npm install
   ```

3. Start dev server:

   ```powershell
   npm run dev
   ```

The dev server will default to port 5174 (configured in `vite.config.js`).

## MCP (Figma) integration

This project includes a small helper script to POST arbitrary JSON payloads to an MCP endpoint (for example a local Figma MCP server at `http://127.0.0.1:3845/mcp`) and save the response into `public/mcp/`.

Usage examples:

```powershell
# call MCP with an inline JSON payload
npm run mcp:fetch -- --url http://127.0.0.1:3845/mcp --data '{"type":"list"}'

# call MCP with a payload file
npm run mcp:fetch -- --url http://127.0.0.1:3845/mcp --file .\scripts\payload.json
```

Notes:

- You can set a default MCP URL in `AdminDashboard/.env.local` using `MCP_URL`.
- The script is intentionally flexible and does not assume an MCP schema; pass the payload your MCP server expects.
- Responses are saved in `public/mcp/` as `mcp-response.json` or individual files if the response contains a `files` map.

## Direct Figma fetch

If you prefer calling Figma directly (without an MCP bridge), this repo includes `scripts/figma-fetch-direct.js`. It uses the Figma Images API to download node SVGs. To use it:

1. Create `AdminDashboard/.env.local` with:

```
NODE_FIGMA_TOKEN=your_personal_token_here
FIGMA_FILE_KEY=U3oUSKFdLJtBg1cyBsyzZO
```

2. Install deps and run the script (example downloads node `406:981` from the file you linked):

```powershell
cd 'C:\Users\LENOVO\Downloads\Coding Jetta AWOKAWOK\webcraftjsm\AdminDashboard'
npm install
npm run figma:fetch -- 406:981
```

Downloaded SVGs will be written into `public/figma/406-981.svg`.

## Tailwind setup

This scaffold now includes Tailwind CSS configuration. To enable Tailwind styles, install dependencies and run the dev server:

```powershell
cd 'C:\Users\LENOVO\Downloads\Coding Jetta AWOKAWOK\webcraftjsm\AdminDashboard'
npm install
npm run dev
```

Files added for Tailwind:

- `tailwind.config.cjs` — content scanning and config
- `postcss.config.cjs` — PostCSS setup using tailwindcss + autoprefixer
- `src/index.css` — includes Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)

If you already had the dev server running, restart it after installing deps so PostCSS picks up the new config.
