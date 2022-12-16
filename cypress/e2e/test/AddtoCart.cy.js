/// <reference types="cypress" />
import Addtocart from '../page/Addtocart.page'

describe('Adding To Cart', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#signInOrRegister').click();

        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('li[class="auth0-lock-tabs-current"]');
                cy.get('input[name="email"]').type('annxsivan@gmail.com');
                cy.get('input[name="password"]').type('P@ssword12');
                cy.get('button[id="1-submit"]').click();
                }
        );
    })

    // Test Case: Add a product from the product list page
    it('should add a product from product list page', () => {
        cy.get(Addtocart.ProductOne).scrollIntoView()
        cy.wait(5000)
        cy.get(Addtocart.ProductOne).click()
        cy.get(Addtocart.CartSummary).should('be.visible')
        cy.get('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black').should('have.text', ' Quality Fitted Hat ')
        
    })

    //Add a product from the product details page
    it('should add a product from product details page', () => {
        
        cy.get(Addtocart.ProductImage1).click();
        cy.wait(3000)
        cy.get(Addtocart.Productheader).should('have.text', 'Quality Fitted Hat ')
        cy.get(Addtocart.AddtoCartbtn).click();
        cy.get(Addtocart.CartSummary).should('be.visible');
       
    })

    //Adds multiple products to cart
    it('should add 2 products from product list page', () => {
        cy.get(Addtocart.ProductOne).click();
        cy.get(Addtocart.ProductTwo).click();
        
    })
})