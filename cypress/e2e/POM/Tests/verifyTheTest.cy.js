import Home from "../Page/home.cy";
import Blog from "../Page/blog.cy";

const home = new Home();
const blog = new Blog();

describe("testing home page", () => {
  beforeEach(() => {
    blog.visit();
  });
  it("Open the Url and visit home page", () => {
    blog.visit();
  });

  it("Search for a product in Home Page", () => {
    home.searchInput("iphone");
    home.getSearchButton().click();
  });

  it("Visit the blog page and verify title", () => {
    cy.title().should("eq", "Blog - Poco theme");
  });

  it("Verify the category names in BLog Page", () => {
    blog.getFirstCategoryButton().should("contain.text", "Business");
    blog.getSecondCategoryButton().should("contain.text", "Electronics");
    blog.getThirdCategoryButton().should("contain.text", "Technology");
  });
});
