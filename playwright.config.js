// playwright.config.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from '@playwright/test';

dotenv.config({
  path: `./helpers/POM/config/.env.${process.env.NODE_ENV}`
})

export default defineConfig({

  timeout: 60000, // 30 seconds default timeout per test
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }]}
)
//     {
//       name: 'firefox',
//       use: { browserName: 'firefox' },
//     },
//     {
//       name: 'webkit',
//       use: { browserName: 'webkit' },
//     },
//   ],
// })

