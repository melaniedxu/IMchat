/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// import selenium functions
const { Builder, By, Key, until } = require("selenium-webdriver");
require("geckodriver");
// declare the -web- driver
let driver;
jest.setTimeout(50000);
beforeAll(async () => {
  // initialize the driver before running the tests
  driver = await new Builder().forBrowser("firefox").build();
});

afterAll(async () => {
  // close the driver after running the tests
  await driver.quit();
});

// use the driver to mock user's actions
// async function mockUserAction1() {
//   // open the URL
//   driver.wait(until.urlIs("http://localhost:3000/register"));
//   await driver.get("http://localhost:3000/register");
//   // locate the username/email/pw/confirmedPw box, provide a timeout
//   const username = await driver.wait(
//     until.elementLocated(By.id("register-username")),
//     10000
//   );
//   await username.sendKeys("testuser3", Key.RETURN);

//   const password = await driver.wait(
//     until.elementLocated(By.id("register-password")),
//     10000
//   );
//   await password.sendKeys("testuser333", Key.RETURN);

//   // click on 'register' button
//   await driver.wait(until.elementLocated(By.id("registerBtn")), 20000);
//   await driver.findElement(By.id("registerBtn")).click();
//   // browser.actions().mouseMove(btn).click();
//   return driver.wait(until.elementLocated(By.id("error-message")), 20000);
// }

// async function mockClearError() {
//   // click on 'register' button
//   await driver.wait(until.elementLocated(By.id("clear-error")), 10000);
//   await driver.findElement(By.id("clear-error")).click();
//   // browser.actions().mouseMove(btn).click();
//   // return driver.wait(until.elementLocated(By.id("error-message")), 40000);
// }

// it("shows error when required fields were left empty", async () => {
//   // call the mock function
//   const element = await mockUserAction1();
//   const returnedText = await element.getText();
//   console.log(returnedText);
//   // test that the driver gets redicreted to main and is not null
//   expect(element).not.toBeNull();
//   expect(returnedText).toEqual("Please enter the required fields");
//   // mockClearError();
// });

// // use the driver to mock user's actions
// async function mockUserAction2() {
//   // open the URL
//   driver.wait(until.urlIs("http://localhost:3000/register"));
//   await driver.get("http://localhost:3000/register");
//   // locate the username/email/pw/confirmedPw box, provide a timeout
//   const username = await driver.wait(
//     until.elementLocated(By.id("register-username")),
//     10000
//   );
//   await username.sendKeys("testuser3", Key.RETURN);

//   const email = await driver.wait(
//     until.elementLocated(By.id("register-email")),
//     10000
//   );
//   await email.sendKeys("testuser3@helloooooooo.com", Key.RETURN);

//   const password = await driver.wait(
//     until.elementLocated(By.id("register-password")),
//     10000
//   );
//   await password.sendKeys("333", Key.RETURN);

//   const confirmedPw = await driver.wait(
//     until.elementLocated(By.id("register-ConfirmPassword")),
//     10000
//   );
//   await confirmedPw.sendKeys("333", Key.RETURN);
//   // click on 'register' button
//   await driver.wait(until.elementLocated(By.id("registerBtn")), 20000);
//   await driver.findElement(By.id("registerBtn")).click();
//   // browser.actions().mouseMove(btn).click();
//   return driver.wait(until.elementLocated(By.id("error-message")), 40000);
// }

// it("checks password length", async () => {
//   // call the mock function
//   const element = await mockUserAction2();
//   const returnedText = await element.getText();
//   // test that the driver gets redicreted to main and is not null
//   expect(element).not.toBeNull();
//   expect(returnedText).toEqual("Password must contain at least 5 characters");
// });

// // use the driver to mock user's actions
// async function mockUserAction3() {
//   // open the URL
//   driver.wait(until.urlIs("http://localhost:3000/register"));
//   await driver.get("http://localhost:3000/register");
//   // locate the username/email/pw/confirmedPw box, provide a timeout
//   const username = await driver.wait(
//     until.elementLocated(By.id("register-username")),
//     10000
//   );
//   await username.sendKeys("testuser3", Key.RETURN);

//   const email = await driver.wait(
//     until.elementLocated(By.id("register-email")),
//     10000
//   );
//   await email.sendKeys("testuser3@helloooooooo.com", Key.RETURN);

//   const password = await driver.wait(
//     until.elementLocated(By.id("register-password")),
//     10000
//   );
//   await password.sendKeys("test333", Key.RETURN);

//   const confirmedPw = await driver.wait(
//     until.elementLocated(By.id("register-ConfirmPassword")),
//     10000
//   );
//   await confirmedPw.sendKeys("333", Key.RETURN);
//   // click on 'register' button
//   await driver.wait(until.elementLocated(By.id("registerBtn")), 20000);
//   await driver.findElement(By.id("registerBtn")).click();
//   // browser.actions().mouseMove(btn).click();
//   return driver.wait(until.elementLocated(By.id("error-message")), 40000);
// }

// it("checks password length", async () => {
//   // call the mock function
//   const element = await mockUserAction3();
//   const returnedText = await element.getText();
//   // test that the driver gets redicreted to main and is not null
//   expect(element).not.toBeNull();
//   expect(returnedText).toEqual("Enter the same password");
// });

// // use the driver to mock user's actions
// async function mockUserAction4() {
//   // open the URL
//   driver.wait(until.urlIs("http://localhost:3000/register"));
//   await driver.get("http://localhost:3000/register");
//   // locate the username/email/pw/confirmedPw box, provide a timeout
//   const username = await driver.wait(
//     until.elementLocated(By.id("register-username")),
//     10000
//   );
//   await username.sendKeys("testuser2", Key.RETURN);

//   const email = await driver.wait(
//     until.elementLocated(By.id("register-email")),
//     10000
//   );
//   await email.sendKeys("testuser3@helloooooooo.com", Key.RETURN);

//   const password = await driver.wait(
//     until.elementLocated(By.id("register-password")),
//     10000
//   );
//   await password.sendKeys("test333", Key.RETURN);

//   const confirmedPw = await driver.wait(
//     until.elementLocated(By.id("register-ConfirmPassword")),
//     10000
//   );
//   await confirmedPw.sendKeys("testuser333", Key.RETURN);
//   // click on 'register' button
//   await driver.wait(until.elementLocated(By.id("registerBtn")), 20000);
//   await driver.findElement(By.id("registerBtn")).click();
//   // browser.actions().mouseMove(btn).click();
//   return driver.wait(until.elementLocated(By.id("error-message")), 40000);
// }

// it("checks password length", async () => {
//   // call the mock function
//   const element = await mockUserAction4();
//   const returnedText = await element.getText();
//   // test that the driver gets redicreted to main and is not null
//   expect(element).not.toBeNull();
//   expect(returnedText).toEqual("User already exists");
// });

// use the driver to mock user's actions
async function mockUserAction5() {
  // open the URL
  driver.wait(
    until.urlIs("https://limitless-earth-29006.herokuapp.com/Register")
  );
  await driver.get("https://limitless-earth-29006.herokuapp.com/Register");
  // locate the username/email/pw/confirmedPw box, provide a timeout
  const username = await driver.wait(
    until.elementLocated(By.id("register-username")),
    10000
  );
  await username.sendKeys("testuser3", Key.RETURN);

  const email = await driver.wait(
    until.elementLocated(By.id("register-email")),
    10000
  );
  await email.sendKeys("testuser3@helloooooooo.com", Key.RETURN);

  const password = await driver.wait(
    until.elementLocated(By.id("register-password")),
    10000
  );
  await password.sendKeys("testuser333", Key.RETURN);

  const confirmedPw = await driver.wait(
    until.elementLocated(By.id("register-ConfirmPassword")),
    10000
  );
  await confirmedPw.sendKeys("testuser333", Key.RETURN);
  // click on 'register' button
  await driver.wait(until.elementLocated(By.id("registerBtn")), 20000);
  await driver.findElement(By.id("registerBtn")).click();
  // browser.actions().mouseMove(btn).click();
  return driver.wait(until.elementLocated(By.id("login-username")), 40000);
}

it("test webpage loaded correctly", async () => {
  // call the mock function
  const element = await mockUserAction5();
  // test that user registers successfully and gets redicreted to main view
  expect(element).not.toBeNull();
});
