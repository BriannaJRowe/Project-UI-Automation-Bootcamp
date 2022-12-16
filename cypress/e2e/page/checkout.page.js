class checkout{
    get checkoutBtn(){
        return('.snipcart-base-button__wrapper')
    }
    get name(){
        return('input[name="name"]')
    }
    get email(){
       return('input[name="email"]') 
    }
    get address(){
        return('input[name="address1"]')
    }
    get aptSuite(){
        return('input[name="address2"]')
    }
    get city(){
        return('input[name="city"]')
    }
    get country(){
        return('select[name="country"]')
    }
    get provinceState(){
        return('input[name="province"]')
    }
    get zipcode(){
        return('input[name="postalCode"]')
    }
    get continuetopaymentBtn(){
        return cy.get('button[type="submit"]');
    }
    get cardnumber(){
        return('input[name="card-number"]')
    }
    get expirydate(){
        return('input[name="expiry-date"]')
    }
    get cvv(){
        return('input[name="cvv"]')
    }
    get placeorderbtn(){
        return cy.get('.snipcart-button-primary').click({force: true})
    }
    get billingtitle(){
        return("div[class='snipcart__box'] h1[class='snipcart__font--subtitle']")
    }
    get successmsg(){
        return(`div[class='snipcart__box--title'] div h1[class='snipcart__font--subtitle']`)
    }
    get emailerrormsg(){
        return cy.get('.snipcart-field-error') 
    }

    get checkoutitemvalidate() {
        return cy.get('.snipcart-cart-summary-item__name.snipcart__font--slim')
    }
    
    get checkouttotalvalidate() {
        return cy.get('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')
    }
    
    checkoutproduct(name,email,address,aptSuite,city,country,provinceState,zipcode){
        cy.wait(3000)
        cy.get(this.checkoutBtn).click()
        cy.get(this.name).type(name)
        cy.get(this.email).type(email)
        cy.get(this.address).type(address)
        cy.get(this.aptSuite).type(aptSuite)
        cy.get(this.city).type(city)
        cy.get(this.country).select(country)
        cy.wait(1500)
        cy.get(this.provinceState).type(provinceState,{force:true})
        cy.get(this.zipcode).type(zipcode)
    }
    
    payment(){
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cardnumber).type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find(this.expirydate).type('1225')
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cvv).type('123')
        cy.get('.snipcart-button-primary').click({force: true})
    }

    checkoutproductwithoutname(name,address,aptSuite,city,country,provinceState,zipcode){
        cy.wait(3000)
        cy.get(this.checkoutBtn).click()
        cy.get(this.name).type(name)
        cy.get(this.address).type(address)
        cy.get(this.aptSuite).type(aptSuite)
        cy.get(this.city).type(city)
        cy.get(this.country).select(country)
        cy.wait(1500)
        cy.get(this.provinceState).type(provinceState,{force:true})
        cy.get(this.zipcode).type(zipcode)
    }
    /*checkoutProductWithoutEmail(fullName,streetAddress,aptOrSuite,city,country,provinceOrState,postalCode){
        cy.wait(2000)
        cy.get(this.checkoutBtn).click()
        cy.get(this.fullName).type(fullName)
        cy.get(this.streetAddress).type(streetAddress)
        cy.get(this.aptOrSuite).type(aptOrSuite)
        cy.get(this.city).type(city)
        cy.get(this.country).select(country)
        cy.wait(4000)
        cy.get(this.provinceOrState).type(provinceOrState,{force:true})
        cy.get(this.postalCode).type(postalCode)
        //continuetoPaymentBtn.click()
    }
    editCart(){
        cy.get(this.editBtn).click()
    }*/

    }
    
    export default new checkout()