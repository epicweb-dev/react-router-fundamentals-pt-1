import test, { expect } from '@playwright/test'

test.describe('Routing E2E Tests', () => {
	test('should navigate to home page and render correct content', async ({
		page,
	}) => {
		await page.goto('/')
		await expect(page).toHaveTitle('Epic Shop')
	})

	test('should navigate to products page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products')
		await expect(page).toHaveTitle('All Products')
	})

	test('should navigate to specific product page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products/1')
		await expect(page).toHaveTitle('Product Overview')
	})
})
