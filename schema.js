const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    people: [Person]
    peoplePage(page: Int): Paginated
    getPerson(name: String): [Person]
  }

  type PersonConnection {
    cursor: String!
    hasMore: Boolean!
    people: [Person]
  }

  type Person {
    name: String
    height: Int
    mass: String
    gender: String
    homeworld: String
  }

  type Planet {
    name: String
  }

  type Paginated {
    count: Int
    next: String
    previous: String
    results:[Person]
  }
`;

module.exports = typeDefs;
