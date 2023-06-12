import { v4 } from "uuid"
export const Mutation = {
    addCategory: (parent: any, args: any, context: any) => {
        const { name } = args.input
        const { categories } = context.db
        const newCategory = {
            id: v4(),
            name
        }

        categories.push(newCategory)
        return newCategory
    },

    addProduct: (parent: any, { input }: any, { db }: any) => {
        const { name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId } = input

        const newProduct = {
            id: v4(),
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        }

        db.products.push(newProduct)
        return newProduct
    },
    addReview: (parent: any, { input }: any, { db }: any) => {
        const { date,
            title,
            comment,
            rating, productId } = input
        const newReviewData = {
            id: v4(),
            date,
            title,
            comment,
            rating,
            productId
        }
     
        db.reviews.push(newReviewData)
        return newReviewData
    },
    deleteCategory: (parent: any, {id}: any, {db}:any) => {
        db.categories = db.categories.filter((c:any) => c.id !== id)
        db.products = db.products.map((product:any) => {
            if(product.categoryID === id){
                return {...product,
                categoryID: null
                }
            }
            return product
        })
        return true
    },
    deleteProduct: (parent: any, {id}: any, {db}:any) => {
        db.products = db.products.filter((c:any) => c.id !== id)
        console.log(db.products)
        db.reviews = db.reviews.filter((r:any) => r.productId !== id)
        return true

    },
    deleteReview: (parent: any, {id}: any, {db}:any) => {
        db.reviews = db.reviews.filter((r:any) => r.id !== id)
        return true
    },
    updateCategory: (parent: any, {id,input}: any, {db}:any[any]) => {
        const index = db.categories.findIndex((category:any) => category.id === id)
        if(index == -1) {
            return null
        }
        db.categories[index] = {
            ...db.categories[index],
            ...input
        }
        return db.categories[index]
    },
    updateProduct: (parent: any, {id,input}: any, {db}:any[any]) => {
        const index = db.products.findIndex((product:any) => product.id === id)
        if(index == -1) {
            return null
        }
        db.products[index] = {
            ...db.products[index],
            ...input
        }
        return db.products[index]
    },
    updateReview: (parent: any, {id,input}: any, {db}:any[any]) => {
        const index = db.reviews.findIndex((review:any) => review.id === id)
        if(index == -1) {
            return null
        }
        db.reviews[index] = {
            ...db.reviews[index],
            ...input
        }
        return db.reviews[index]
    }
}