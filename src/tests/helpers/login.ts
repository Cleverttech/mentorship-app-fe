import { Page } from "@playwright/test";

export async function loginAsMentee(page: Page) {
	await page.goto("http://localhost:3000/login");
	await page.fill('input[name="email"]', "mentee@example.com");
	await page.fill('input[name="password"]', "123456");
	await page.click('button[type="submit"]');
	await page.waitForURL("**/mentee/dashboard");
}

export async function loginAsMentor(page: Page) {
	await page.goto("http://localhost:3000/login");
	await page.fill('input[name="email"]', "mentor@example.com");
	await page.fill('input[name="password"]', "123456");
	await page.click('button[type="submit"]');
	await page.waitForURL("**/mentor/dashboard");
}
