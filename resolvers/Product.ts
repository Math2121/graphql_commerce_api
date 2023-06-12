

export const Product = {
    category: (parent: any, args: any, context: any) => {
        const categories: any[] = context.db.categories
        const categoryID = parent.categoryID
        return categories.find(category => category.id === categoryID)
    },
    reviews: (parent: any, args: any,context: any) => {
        const reviews: any[] = context.db.reviews
        const id = parent.id
        return reviews.filter(review => review.productId === id)
    }
}