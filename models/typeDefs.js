const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

module.exports = {typeDefs}