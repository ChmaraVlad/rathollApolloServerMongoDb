// graphQL wrapper
const {gql} = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
    type Message{
        _id: ID!
        username: String!
        text: String!
        createdAt: String!
        updatedAt: String!
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
        id: ID!
    }
    type Mutation{
        createMessage(input: CreateMessageInput!): Message!
        updateMessage(input: UpdateMessageInput!): Message!
        deleteMessage(id: ID): DeletePayload!
    }
`;