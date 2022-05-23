const mutations = require('./mutations');
const queries = require('./queries');

const { GraphQLScalarType } = require('graphql');


const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value; // Convert outgoing Date to integer for JSON
    },
  });

module.exports = {
    Date: dateScalar,

    Mutation: {
        ...mutations
    },
    Query: {
        ...queries
    }
}