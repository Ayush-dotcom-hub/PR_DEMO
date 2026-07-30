const { test, expect } = require("@playwright/test");
test("Automation Demo Site", async ({ page }) => {
  await page.goto(
    "https://demo.automationtesting.in/Register.html#google_vignette",
  );
  expect(await page.title("Register"));
  expect(
    await page.url(
      "https://demo.automationtesting.in/Register.html#google_vignette",
    ),
  );
  await page.getByPlaceholder("First Name").fill("Jhon");
  await page.getByPlaceholder("Last Name").fill("Wick");
  await page
    .locator("//textarea[@ng-model='Adress']")
    .fill("13th Street 47 W 13th St, New York, NY 10011, USA");
  await page.locator("//input[@type='email']").fill("jovose7627@kierko.com");
  await page.locator("//input[@type='tel']").fill("2736939386");
  await page.locator("//input[@value='Male']").check();
  expect(await page.locator("//input[@value='Male']")).toBeChecked();
  await page.locator("#checkbox2").check();
  expect(await page.locator("#checkbox2")).toBeChecked();
  await page.locator("#msdd").click();
  await page.getByText("English").click();
  await page.locator("body").click({ position: { x: 0, y: 0 } });
  await page.locator("#Skills").selectOption("Android");
  await page.keyboard.press("Escape");
  await page.locator(".select2-selection.select2-selection--single").click();
  await page.locator("//input[@type='search']").fill("Hong Kong");
  await page.getByRole("option", { name: "Hong Kong" });
  await page.getByPlaceholder("Year").selectOption("1998");

  await page.getByPlaceholder("Month").selectOption("October");
  await page.getByPlaceholder("Day").selectOption("9");

  await page.locator("#firstpassword").fill("Admin123");
  await page.locator("#secondpassword").fill("Admin123");
  await page.locator("#submitbtn").click();
});
