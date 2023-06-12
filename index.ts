import { ApolloServer, gql } from 'apollo-server'


import { typeDefs } from './schema.ts'
import { Category } from './resolvers/Category.ts'
import { Query } from './resolvers/Query.ts'
import { Product } from './resolvers/Product.ts'
import { Mutation } from './resolvers/Mutation.ts'
import { db } from './database/db.ts'
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Category,
        Query,
        Product,
        Mutation

    },
    context: {
        db
    }
})

server.listen().then(({ url }) => {
    console.log(`server is running at ${url}`)
})