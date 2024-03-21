import Blog from "../Page/blog.cy"
 
 const blog = new Blog()
 
  
 describe("testing blog page", () => {
   beforeEach(() => {
     blog.visit()
   })
  
   it("Visit the blog page", () => {
     cy.title().should("eq", "Blog - Poco theme")
   })
  
   it("Should have correct category names", () => {
     blog.getFirstCategoryButton().should("contain.text", "Business")
     blog.getSecondCategoryButton().should("contain.text", "Electronics")
     blog.getThirdCategoryButton().should("contain.text", "Technology")
   })
 })