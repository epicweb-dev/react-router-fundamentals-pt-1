import test, { expect } from '@playwright/test'

test.describe('Routing E2E Tests', () => {
	test('should navigate to home page and render correct content', async ({
		page,
	}) => {
		await page.goto('/')
		await expect(page.getByText("Landing page!")).toBeVisible()
	})

	test('should navigate to about page and render correct content', async ({
		page,
	}) => {
		await page.goto('/about')
		await expect(page.getByText("About page!")).toBeVisible()
	})

	test('should navigate to contact page and render correct content', async ({
		page,
	}) => {
		await page.goto('/contact')
		await expect(
			page.getByText("Contact page!"),
		).toBeVisible()
	})

	test('should navigate to products page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products')
		await expect(
			page.getByText("Products page!"),
		).toBeVisible()
	})

	test('should navigate to terms-of-service page and render correct content', async ({
		page,
	}) => {
		await page.goto('/terms-of-service')
		await expect(
			page.getByText("Terms of Service page!"),
		).toBeVisible()
	})

	test('should navigate to terms-of-use page and render correct content', async ({
		page,
	}) => {
		await page.goto('/terms-of-use')
		await expect(
			page.getByText("Terms of Use page!"),
		).toBeVisible()
	})

	test('should navigate to specific product page and render correct content', async ({
		page,
	}) => {
		await page.goto('/products/1')
		await expect(
			page.getByText("Product Detail Page"),
		).toBeVisible()
	})
})
