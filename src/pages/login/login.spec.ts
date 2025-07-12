import { test, expect, Page } from "@playwright/test";
import { loginAsMentee } from "../../tests/helpers/login";

test("Mentee can log in and reach dashboard", async ({
	page,
}: {
	page: Page;
}) => {
	await loginAsMentee(page);

	// eslint-disable-next-line testing-library/prefer-screen-queries
	const heading = page.getByRole("heading", {
		name: "Welcome to Your Dashboard",
	});

	await expect(heading).toBeVisible();
	await heading.click(); // Only if this is necessary for navigation
});
