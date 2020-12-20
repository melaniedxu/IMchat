/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// import selenium functions
const { Builder, By, Key, until } = require("selenium-webdriver");
require("geckodriver");
// declare the -web- driver
let driver;
jest.setTimeout(40000);
beforeAll(async () => {
  // initialize the driver before running the tests
  driver = await new Builder().forBrowser("firefox").build();
});

afterAll(async () => {
  // close the driver after running the tests
  await driver.quit();
});

// use the driver to mock user's actions
async function mockUserAction() {
  // open the URL
  driver.wait(until.urlIs("https://limitless-earth-29006.herokuapp.com/login"));
  await driver.get("https://limitless-earth-29006.herokuapp.com/login");
  // locate the username box, provide a timeout
  const username = await driver.wait(
    until.elementLocated(By.id("login-username")),
    10000
  );
  await username.sendKeys("testuser2", Key.RETURN);

  const password = await driver.wait(
    until.elementLocated(By.id("login-password")),
    10000
  );
  await password.sendKeys("testuser2", Key.RETURN);
  // click on 'login' button
  await driver.wait(until.elementLocated(By.id("loginBtn")), 20000);
  await driver.findElement(By.id("loginBtn")).click();
  // browser.actions().mouseMove(btn).click();
  return driver.wait(until.elementLocated(By.id("MainView")), 20000);
}

it("test webpage loaded correctly", async () => {
  // call the mock function
  const element = await mockUserAction();
  // test that the driver gets redicreted to main and is not null
  expect(element).not.toBeNull();
});
