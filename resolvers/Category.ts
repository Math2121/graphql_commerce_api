

export const Category = {

    products: (parent: any, args: any, context: any) => {
        const products: any[] = context.db.products
        const categoryID = parent.id
        const filter = args
        
        const categoryProducts =  products.filter(product => product.categoryID === categoryID)
        let filteredCategoryProducts = categoryProducts
        if(filter){
            if(filter.onSale){
                filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale)
            }
        }
        return filteredCategoryProducts
        
    }

}