import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }
    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddproductInput!): Product!
        addReview(input: AddreviewInput!): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
        updateCategory(id: ID!, input: UpdateCategoryInput): Category
        updateProduct(id: ID!, input: UpdateProductInput): Product
        updateReview(id: ID!, input: UpdateReviewInput): Review
    }

    input ProductsFilterInput{
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput{
        name: String!
    }
    input AddproductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String!
    }
    input AddreviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }
    input UpdateCategoryInput {
        name: String!
    }
    input UpdateProductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String
    }
    input UpdateReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }
`
