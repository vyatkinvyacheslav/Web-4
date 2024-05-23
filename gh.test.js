let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
    testTimeout: 100000
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
    testTimeout: 100000
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
    testTimeout: 100000
  });


beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://resources.github.com/newsletter");
});

afterEach(() => {
  page.close();
});

  test("1", async () => {
    const btnSelector = ".hero-section-brand-heading";
    await page.waitForSelector(btnSelector, {
    visible: true,
  });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Subscribe to our developer newsletter")
    testTimeout: 100000
  });



  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/marketplace?type=actions");
  });
  
  afterEach(() => {
    page.close();
  });
  
    test("2", async () => {
      const btnSelector = ".lh-condensed text-wrap-balance";
      await page.waitForSelector(btnSelector, {
      visible: true,
    });
      const actual = await page.$eval(btnSelector, link => link.textContent);
      expect(actual).toContain("Enhance your workflow with extensions")
      testTimeout: 100000
    });


    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto("https://github.com/pricing");
    });
    
    afterEach(() => {
      page.close();
    });
    
      test("3", async () => {
        const btnSelector = ".h2-mktg";
        await page.waitForSelector(btnSelector, {
        visible: true,
      });
        const actual = await page.$eval(btnSelector, link => link.textContent);
        expect(actual).toContain("Get the complete developer platform.")
        testTimeout: 110000
      });

      


      
});


