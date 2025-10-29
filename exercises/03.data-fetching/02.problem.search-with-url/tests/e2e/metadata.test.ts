import test, { expect } from '@playwright/test'

test.describe('Routing E2E Tests', () => {
	test('should navigate to home page and render correct content', async ({
		page,
	}) => {
		await page.goto('/')
		await expect(page).toHaveTitle('Epic Shop')

		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to about page and render correct content', async ({
		page,
	}) => {
		await page.goto('/about')
		await expect(page).toHaveTitle('Epic Shop | About Us')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to contact page and render correct content', async ({
		page,
	}) => {
		await page.goto('/contact')
		await expect(page).toHaveTitle('Epic Shop | Contact Us')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to products page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products')
		await expect(page).toHaveTitle('Epic Shop | All Products')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to terms-of-service page and render correct content', async ({
		page,
	}) => {
		await page.goto('/terms-of-service')
		await expect(page).toHaveTitle('Epic Shop | Terms of Service')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to terms-of-use page and render correct content', async ({
		page,
	}) => {
		await page.goto('/terms-of-use')
		await expect(page).toHaveTitle('Epic Shop | Terms of Use')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})

	test('should navigate to specific product page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products/1')
		await expect(page).toHaveTitle('Epic Shop | Product overview')
		// Check for duplicate <title> elements
		const titleElements = page.locator('title')
		await expect(titleElements).toHaveCount(1)
	})
})
