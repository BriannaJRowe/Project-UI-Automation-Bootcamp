/// <reference types="cypress" />
import checkout from '../page/checkout.page'
import product from '../page/addtocart.page'

//const tests = require('../../fixtures/example.json')

describe('Sort and Filter', () => {
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

      // Test Case: Add a product to cart and checkout
    it('should checkout a single item', () => {
        cy.get('button[data-item-id="quality-hat-model"]').scrollIntoView()
        cy.wait(5000)
        product.Addproduct()
        cy.wait(1500)
        checkout.checkoutproduct("Brianna Tester","britest@yahoo.com","12 King Street","12","Hollywood","Jamaica","Kingston","33203")
        cy.wait(2000)
        checkout.continuetopaymentBtn.click({force: true})
        cy.wait(5000)
        checkout.payment()
        cy.wait(3000)
        cy.get(checkout.successmsg).should('have.text','Thank you for your order')
        
    })

     // Test Case: Add multiple products to cart and checkout
     it('should checkout a multiple items', () => {
        cy.wait(5000)
        product.Addmultipleproducts()
        cy.wait(1500)
        checkout.checkoutproduct("Brianna Tester","britest@yahoo.com","12 King Street","12","Hollywood","Jamaica","Kingston","33203")
        cy.wait(2000)
        checkout.continuetopaymentBtn.click({force: true})
        cy.wait(5000)
        checkout.payment()
        cy.wait(3000)
        cy.get(checkout.successmsg).should('have.text','Thank you for your order')
        
    })

    // Test Case: Attempt to checkot without completing all billing fields
    it('should not allow the user to checkout without entering an email address', () => {
        cy.get('button[data-item-id="quality-hat-model"]').scrollIntoView()
        cy.wait(5000)
        product.Addproduct()
        cy.wait(1500)
        checkout.checkoutproductwithoutname("Brianna Test","12 King Street","12","Hollywood","Jamaica","Kingston","33203")
        checkout.continuetopaymentBtn.click({force: true})
        cy.wait(7000)
        cy.get(checkout.emailerrormsg).should('have.text','This field is required')
        
    })

    
})