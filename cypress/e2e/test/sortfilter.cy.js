/// <reference types="cypress" />
import product from '../page/Prod.page'

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

      // Test Case: Verify that the user can sort from A - Z
    it('sorts product list from A-Z', () => {

        cy.get(product.SortDropDown).select('aToZ')

        var productlist = ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug', 'Quality Pillow', 'Quality Hooded Sweatshirt',
                            'Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants',
                            'Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
        productlist.sort()

        cy.wait(5000)
        cy.get(product.productName).each(($elem, index) => {
            expect($elem.text()).equal(productlist[index])
        })
    })

    // Test Case: Verify that the user can sort from Z - A
    it('sorts product list from Z-A', () => {

        cy.get(product.SortDropDown).select('zToA')

        var productlist = ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug', 'Quality Pillow', 'Quality Hooded Sweatshirt',
                            'Quality Sweatshirt','Quality Kids Tshirt','Quality Tshirt','Quality Vneck','Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants',
                            'Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes','Red Couch','White Couch','Gray Couch','Mackbook Pro','Dell Laptop','HP Laptop']
        productlist.sort().reverse()

        cy.wait(5000)
        cy.get(product.productName).each(($elem, index) => {
            expect($elem.text()).equal(productlist[index])
        })

    })

    //Test Case: Verify that the user can filter by the hats category
    it('should filter by category',() => {
        cy.get(product.CategoryDropDown).select('hat') 
        const hats = ['Quality Fitted Hat', 'Quality Trucker Hat']
        cy.wait(5000)
        cy.get(product.productName).each(($elem,index) =>{
            expect($elem.text()).equal(hats[index])
    })

})

})