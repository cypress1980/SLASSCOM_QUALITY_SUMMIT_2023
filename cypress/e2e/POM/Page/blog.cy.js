class Blog {
    constructor() {
      this.url = "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home"
      this.title = "Blog"
    }
   
    visit() {
      cy.visit(this.url)
    }
   
    getFirstCategoryButton() {
      return cy.get("#entry_210963 > div > a:nth-child(1)")
    }
   
    getSecondCategoryButton() {
      return cy.get("#entry_210963 > div > a:nth-child(2)")
    }
   
    getThirdCategoryButton() {
      return cy.get("#entry_210963 > div > a:nth-child(3)")
    }
   
    getPreviousBlogsButton() {
      return cy.get(
        "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-prev.swiper-button-disabled"
      )
    }
   
    getNextBlogsButton() {
      return cy.get(
        "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-next"
      )
    }
  }
   
  module.exports = Blog