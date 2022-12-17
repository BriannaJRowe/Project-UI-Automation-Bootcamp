class product{

    //Selectors
    
    get FittedHatProduct () {
        return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-hat-model"]')
    }

    get TruckerHatProduct () {
        return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-hat"]')
    }

    get CartSummary () {
        return ('.section.snipcart-cart__content')
    }

    get continueshoppingbtn() {
        return ('.snipcart-modal__close-title.snipcart__font--std')
    }
    
    //Methods
    Addproduct()
    {
        cy.get(this.FittedHatProduct).click()
    }

    Addmultipleproducts()
    {
        cy.get(this.FittedHatProduct).click()
        cy.wait(1500)
        cy.get(this.continueshoppingbtn).click()
        cy.get(this.TruckerHatProduct).click()
    }

}

export default new product ()
