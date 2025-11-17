// playwright.config.js
import { defineConfig } from '@playwright/test';

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