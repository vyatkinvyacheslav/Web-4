let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
}, 150000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Lets build from here · GitHub');
    }, 100000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
    }, 100000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
    }, 100000);

});
    


describe("Github other page tests", () => {

  test("1", async () => {
    await page.goto("https://resources.github.com/newsletter");
    const btnSelector = ".hero-section-brand-heading";
    await page.waitForSelector(btnSelector, {
    visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Subscribe to our developer newsletter")
    }, 150000);

   
  test("2", async () => {
    await page.goto("https://github.com/marketplace?type=actions");
    const btnSelector = ".lh-condensed text-wrap-balance";
    await page.waitForSelector(btnSelector, {
    visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Enhance your workflow with extensions")
    }, 150000);

      
  test("3", async () => {
    await page.goto("https://github.com/pricing");
    const btnSelector = ".h2-mktg";
    await page.waitForSelector(btnSelector, {
    visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get the complete developer platform.")
    }, 150000);
      
});


