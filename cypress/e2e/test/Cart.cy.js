/// <reference types="cypress" />
import Cart from '../page/Cart.page'

describe('Cart', () => {
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

    //Test Case: Remove a product from the cart 
    it('should verify a user can remove an item from the cart', () => {
        
        cy.get('button[data-item-id="quality-hat-model"]').scrollIntoView()
        cy.wait(5000)
        cy.get('button[data-item-id="quality-hat-model"]').click()
        cy.get(Cart.cartSummary).should('be.visible')
        cy.wait(5000)
        cy.get(Cart.removebtn).should('be.visible');
        cy.get(Cart.removebtn).click()
        
        cy.get(Cart.emptycartmsg).should('be.visible');
        
               
        
    })

    //Test Case: Increase the quantity of a product in the cart
    xit('should increase the quantity of an item in the cart', () => {
        cy.get('button[data-item-id="quality-hat-model"]').scrollIntoView()
        cy.wait(5000)
        cy.get('button[data-item-id="quality-hat-model"]').click()
        cy.get(Cart.cartSummary).should('be.visible')
        cy.wait(1500)
        cy.get(Cart.cartitemqty).should('have.text', '1');
        cy.get(Cart.increaseqty).click();
        cy.get(Cart.cartitemqty).should('have.text', '2');
    })

    //Test Case: decrease the quantity of a product in the cart
    xit('should decrease the quantity of an item in the cart', () => {
        cy.get('button[data-item-id="quality-hat-model"]').scrollIntoView()
        cy.wait(5000)
        cy.get('button[data-item-id="quality-hat-model"]').click()
        cy.get(Cart.cartSummary).should('be.visible')
        cy.wait(1500)
        cy.get(Cart.cartitemqty).should('have.text', '1');
        cy.get(Cart.decreaseqty).click();
        cy.get(Cart.emptycartmsg).should('be.visible');
        
    })

    
   
})