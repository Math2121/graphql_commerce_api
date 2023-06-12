import { categories } from "../database/categories"
import { products } from "../database/products"
import { reviews } from "../database/reviews"

export const Query = {

    products: (parent: any, args: any, {db}: any) => {
        const filter = args.filter
        let filterProducts = db.products
        if(filter){

            if(filter.onSale){
                filterProducts = filterProducts.filter((product:any) => product.onSale)
            }

            if([1,2,3,4,5].includes(filter.avgRating)){
                filterProducts = filterProducts.filter((product:any) => {
                    let sumRating = 0;
                    let numberOfReviews = 0

                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    });

                    const avgProductRating = sumRating / numberOfReviews
           
                    return avgProductRating >= filter.avgRating
                })
            }
        }
        return filterProducts
    },
    product: (parent: any, args: any, context: any) => {
        const productID = args.id

        const product = products.find(product => product.id === productID)
        if (!product) return null

        return product
    },
    categories: () => categories,
    category: (parent: any, args: any, context: any) => {
        const { id } = args
        return categories.find(category => category.id === id)
    }

}