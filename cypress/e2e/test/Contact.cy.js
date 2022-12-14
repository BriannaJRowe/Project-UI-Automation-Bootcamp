/// <reference types="cypress" />
import Contact from '../page/Contact.page'

describe('Contact', () => {
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

    //Test Case: Add a product from the product list page
        xit('Should send a message using the form', () => {
            cy.wait(5000)
            cy.get(Contact.Contactbtn).click()
            cy.wait(5000)
            cy.get(Contact.fname).type('Brianna')
            cy.get(Contact.lname).type('TEST')
            cy.get(Contact.email).type('briannastest@gmail.com')
            cy.get(Contact.subject).type('TESTING')
            cy.get(Contact.comments).type('This project was done using Cypress')
            cy.get(Contact.sendmsgbtn).click()
            cy.wait(1500)
            cy.get(Contact.popup).should('be.visible')
        })

        //Test Case: Verify user is taken to the company's twitter page
        xit('should access the Twitter profile', () => {
            cy.wait(5000)
            cy.get(Contact.Contactbtn).click()
            cy.wait(5000)
            cy.get('p[class="chakra-text css-0"]').contains('Twitter').click()
            cy.wait(10000)
            cy.url().should('eq', 'https://twitter.com/qualityworkscg')
            
        })

        // Test Case: Verify that the user cannot send a message without completing all fields (Unhappy path)
        it('Should not send a message', () => {
            cy.wait(5000)
            cy.get(Contact.Contactbtn).click()
            cy.wait(5000)
            cy.get(Contact.lname).type('TEST')
            cy.get(Contact.email).type('briannastest@gmail.com')
            cy.get(Contact.subject).type('TESTING')
            cy.get(Contact.comments).type('This project was done using Cypress')
            cy.get(Contact.sendmsgbtn).click()
            cy.wait(1500)
            cy.get(Contact.fielderror).should('be.visible') 
        })
})

