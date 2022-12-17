class product{
    
    //Selectors
    get productName() { return ('p[class="chakra-text css-1n64n71"]') }

    get SortDropDown() 
    { 
        return ('#sort') 
    }

    get CategoryDropDown()
    {
        return ('#category')
    }

    //Methods
    Sort(sort){
        cy.get(this.SortDropDown).select(sort)
    }


}

export default new product()