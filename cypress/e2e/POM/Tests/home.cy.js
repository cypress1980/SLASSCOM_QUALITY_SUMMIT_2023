import Home from "../Page/home.cy"
import Blog from "../Page/blog.cy"
 
 const home = new Home()
 const blog = new Blog()
  
 describe("testing home page", () => {
    beforeEach(() => {
        blog.visit()
      })
   it("Open the Url and visit home page", () => {
    blog.visit()
   })
  
   it("should search for a product", () => {
     home.searchInput("iphone")
     home.getSearchButton().click()
   })
 })