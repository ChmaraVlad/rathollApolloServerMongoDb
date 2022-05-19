// graphQL wrapper
const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
    type User{
        _id: ID!
        username: String!
    }
    type Query{
        users: [User]
        refreshUser(_id: ID!): User 
    }
    input CreateUserInput{
        username: String!
    }
        
    type Mutation{
        createUser(input: CreateUserInput!): User!
    }
`;