import * as os from 'os'

import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: [
    ['list'],
  ],
  outputDir: '../test-traces',
  use: {
    // Browser options
    headless: true,

    // Context options
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',

    // https://playwright.dev/docs/api/class-browsertype#browser-type-launch
    launchOptions: {}
  },
  timeout: 5000
}
export default config
