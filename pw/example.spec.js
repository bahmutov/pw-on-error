// @ts-check
const { test, expect } = require('@playwright/test')

// commands operate with respect to the "baseUrl"
// defined in the playwright.config.js file

test('has title', async ({ page }) => {
  // if the application throws an unhandled error
  // we want to fail the test. Make sure to register
  // the error callback before visiting the page
  page.on('pageerror', async (exception) => {
    console.log('page error!')
    // throw exception
    // alternative
    expect(false, 'page error').toBeTruthy()
  })

  await page.goto('/')
  await expect(page.locator('body')).toHaveClass('loaded')
  await expect(page.locator('.todo-list li')).toHaveCount(0)
})
