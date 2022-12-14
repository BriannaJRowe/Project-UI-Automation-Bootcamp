class Products {

    //Selectors
    get productone() {
        return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')
    }

    get productheading() {
        return ('.css-egoftb > :nth-child(1) > .chakra-heading')
    }

    get image1() {
        return ('li[class="slide selected previous"] div')
    }

    get image2() {
        return ('li[class="slide selected"] div')
    }

    get backbtn() {
        return('.chakra-heading.css-18j379d')
    }

    get category(){
        return('div[class="chakra-stack css-egoftb"] span[class="css-1ccau2i"]')
    }

    get nextarrow() {
        return('button[class="control-arrow control-next"]')
    }

    get backarrow() {
        return('button[class="control-arrow control-prev"]')
    }

}

export default new Products ()