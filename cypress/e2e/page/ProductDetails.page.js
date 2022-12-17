class Products {

    //Selectors
    get fittedhat() {
        return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')
    }

    get productheading() {
        return ('.css-egoftb > :nth-child(1) > .chakra-heading')
    }

    get productcategory() {
        return('div[class="chakra-stack css-egoftb"] span[class="css-1ccau2i"]')
    }

    get CartSummary() {
        return ('section.snipcart-cart__content');
    }

}

export default new Products ()