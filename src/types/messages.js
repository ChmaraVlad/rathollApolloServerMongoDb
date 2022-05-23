// graphQL wrapper
const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
scalar Date

    type Message{
        _id: ID!
        username: String!
        text: String!
        createdAt: Date!
        updatedAt: Date!
    }
    type Query{
        messages: [Message]
        messageById: Message
    }
    input CreateMessageInput{
        username: String!
        text: String!
    }
    input UpdateMessageInput{
        _id: ID!
        newText: String!
    }
    type DeletePayload{
        _id: ID!
    }
    type Mutation{
        createMessage(input: CreateMessageInput!): Message!
        updateMessage(input: UpdateMessageInput!): Message!
        deleteMessage(id: ID!): DeletePayload!
    }
`;